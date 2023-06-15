import { useState } from 'react';
import { Buch } from '../../types/buchinterface.tsx';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const BuchTable = ({ buecher }: { buecher: Buch[] }) => {
    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const toggleRowExpansion = (isbn: string) => {
        if (expandedRows.includes(isbn)) {
            setExpandedRows(expandedRows.filter((row) => row !== isbn));
        } else {
            setExpandedRows([...expandedRows, isbn]);
        }
    };

    const renderRatingStars = (rating: number) => {
        const maxStars = 5;
        const filledStars = Math.round(rating);
        const emptyStars = maxStars - filledStars;

        const filledStar = <span style={{ color: 'gold' }}>★</span>;
        const emptyStar = <span style={{ color: 'gray' }}>★</span>;

        const stars = [];
        for (let i = 0; i < filledStars; i++) {
            stars.push(filledStar);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(emptyStar);
        }

        return stars;
    };

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ISBN</th>
                    <th>Titel</th>
                    <th>Untertitel</th>
                    <th>Rating</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {buecher.map((buch) => (
                    <React.Fragment key={buch.isbn}>
                        <tr>
                            <td>{buch.isbn}</td>
                            <td>{buch.titel.titel}</td>
                            <td>{buch.titel.untertitel}</td>
                            <td>{renderRatingStars(buch.rating)}</td>
                            <th>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <button
                                        onClick={() =>
                                            toggleRowExpansion(buch.isbn)
                                        }
                                        style={{
                                            border: 'none',
                                            background: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Details&nbsp;&nbsp;
                                        {expandedRows.includes(buch.isbn) ? (
                                            <FontAwesomeIcon icon={faCaretUp} />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faCaretDown}
                                            />
                                        )}
                                    </button>
                                </div>
                            </th>
                        </tr>
                        {expandedRows.includes(buch.isbn) && (
                            <tr>
                                <td colSpan={5}>
                                    <div className="details-content">
                                        <p>Art: {buch.art}</p>
                                        <p>Preis: {buch.preis.toFixed(2)}</p>
                                        <p>
                                            Rabatt:{' '}
                                            {(buch.rabatt * 100).toFixed(2)}%
                                        </p>
                                        <p>
                                            Lieferbar:{' '}
                                            {buch.lieferbar ? 'Ja' : 'Nein'}
                                        </p>
                                        <p>Datum: {buch.datum}</p>
                                        <p>Homepage: {buch.homepage}</p>
                                        <p>
                                            Schlagwörter:{' '}
                                            {buch.schlagwoerter.join(', ')}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default BuchTable;
