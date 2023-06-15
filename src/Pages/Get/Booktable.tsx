import { Buch } from '../../types/buchinterface.tsx';

const BuchTable = ({ buecher }: { buecher: Buch[] }) => {
    // Funktion zur Erzeugung der Sternsymbole basierend auf dem Rating
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
                    <th>Art</th>
                    <th>Preis</th>
                    <th>Rabatt</th>
                    <th>Lieferbar</th>
                    <th>Datum</th>
                    <th>Homepage</th>
                    <th>Schlagwörter</th>
                </tr>
            </thead>
            <tbody>
                {buecher.map((buch) => (
                    <tr key={buch.isbn}>
                        <td>{buch.isbn}</td>
                        <td>{buch.titel.titel}</td>
                        <td>{buch.titel.untertitel}</td>
                        <td>{renderRatingStars(buch.rating)}</td>
                        <td>{buch.art}</td>
                        <td>{buch.preis}</td>
                        <td>{(buch.rabatt * 100).toFixed(2)}%</td>
                        <td>{buch.lieferbar ? 'Ja' : 'Nein'}</td>
                        <td>{buch.datum}</td>
                        <td>{buch.homepage}</td>
                        <td>{buch.schlagwoerter.join(', ')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BuchTable;
