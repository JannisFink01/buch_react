import axios from 'axios';
import './form.css';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { Dropdown, Form } from 'react-bootstrap';
import { handleErrorResponse } from './formerrors';
import { Modal, Button } from 'react-bootstrap';

export default function Formular() {
    const [isbn, setIsbn] = useState('');
    const [titel, setTitel] = useState('');
    const [untertitel, setUntertitel] = useState('');
    const [rating, setRating] = useState(0);
    const [buchArt, setBuchArt] = useState('');
    const [preis, setPreis] = useState(0.0);
    const [rabatt, setRabatt] = useState(0.0);
    const [lieferbar, setLieferbar] = useState(true);
    const [datum, setDatum] = useState('');
    const [homepage, setHomepage] = useState('');
    const [schlagwörter, setSchlagwörter] = useState<string[]>([]);
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isbnError, setIsbnError] = useState('');
    const [homepageError, setHomepageError] = useState('');
    const [ratingError, setRatingError] = useState('');
    const [rabattError, setRabattError] = useState('');
    const [datumError, setDatumError] = useState('');

    const API_ENDPOINT = 'https://localhost:3000/rest';
    const token = Cookies.get('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const uniqueSchlagwoerter = [...new Set(schlagwörter)];
    const payload = {
        isbn: isbn,
        titel: {
            titel: titel,
            untertitel: untertitel,
        },
        rating: rating,
        art: buchArt,
        preis: preis,
        rabatt: rabatt,
        lieferbar: lieferbar,
        datum: datum,
        homepage: homepage,
        schlagwoerter: uniqueSchlagwoerter,
        abbildungen: [
            {
                beschriftung: 'Abb. 1',
                contentType: 'img/png',
            },
        ],
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_ENDPOINT}`, payload, config);
            if (res.status === 201) {
                const {
                    isbn,
                    titel,
                    untertitel,
                    rating,
                    buchArt,
                    preis,
                    rabatt,
                    lieferbar,
                    homePage,
                    schlagwörter,
                } = res.data;

                console.log({
                    isbn,
                    titel,
                    untertitel,
                    rating,
                    buchArt,
                    preis,
                    rabatt,
                    lieferbar,
                    homePage,
                    schlagwörter,
                });
                setTitel('');
                setUntertitel('');
                setBuchArt('');
                setDatum('');
                setHomepage('');
                setIsbn('');
                setPreis(0.0);
                setRabatt(0.0);
                setRating(0);
                setSchlagwörter([]);
                setError('');
                setShowPopup(true);
            } else {
                console.log('put fehlgeschlagen');
                console.log;
                handleErrorResponse(res, setError);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error);
            console.log('FEHLER');
            handleErrorResponse(error.response, setError);
        }
    };
    const handleBuchArtChange = (value: string) => {
        setBuchArt(value);
    };
    const handleIsbnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setIsbn(value);

        // Echtzeitvalidierung der ISBN
        const isValidIsbn = /^(978|979)-\d{1,5}-\d{1,7}-\d{1,6}-\d$/.test(
            value,
        );
        if (!isValidIsbn) {
            setIsbnError('Ungültige ISBN');
        } else {
            setIsbnError('');
        }
    };
    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            if (value > 5) {
                setRating(5);
                setRatingError('Das Rating darf nicht größer als 5 sein.');
            } else {
                setRating(value);
                setRatingError('');
            }
        } else {
            setRating(0);
            setRatingError('');
        }
    };
    const handleRabattChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            if (value >= 0 && value < 1) {
                setRabatt(value);
                setRabattError('');
            } else {
                setRabatt(value);
                setRabattError(
                    'Der Rabatt muss zwischen 0 und 1 (ausschließlich) liegen.',
                );
            }
        } else {
            setRabatt(value);
            setRabattError('');
        }
    };
    const handleDatumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setDatum(value);
        const isValidDatum = /^\d{4}-\d{2}-\d{2}$/.test(value);
        if (!isValidDatum) {
            setDatumError('ungültiges Datum');
        } else {
            setDatumError('');
        }
    };

    const handleHomepageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setHomepage(value);
        const isValidHomepage = /^https:\/\/\w+(\.\w+)+$/.test(value);
        if (!isValidHomepage) {
            setHomepageError('ungültige Homepage');
        } else {
            setHomepageError('');
        }
    };
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputIsbn1">ISBN</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputIsbn1"
                                    value={isbn}
                                    onChange={handleIsbnChange}
                                    placeholder="ISBN"
                                />
                                {isbnError && (
                                    <Form.Text className="text-danger">
                                        {isbnError}
                                    </Form.Text>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputTitel1">
                                    Titel
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputTitel1"
                                    value={titel}
                                    onChange={(event) =>
                                        setTitel(event.target.value)
                                    }
                                    placeholder="Titel"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUntertitel1">
                                    Untertitel
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputUntertitel1"
                                    value={untertitel}
                                    onChange={(event) =>
                                        setUntertitel(event.target.value)
                                    }
                                    placeholder="Untertitel"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputRating1">
                                    Rating
                                </label>
                                <input
                                    type="text"
                                    step="0.1"
                                    className="form-control"
                                    id="exampleInputRating1"
                                    value={rating}
                                    onChange={handleRatingChange}
                                    placeholder="Rating"
                                />
                                {ratingError && (
                                    <Form.Text className="text-danger">
                                        {ratingError}
                                    </Form.Text>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPreis1">
                                    Preis
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPreis1"
                                    value={preis}
                                    onChange={(event) =>
                                        setPreis(parseFloat(event.target.value))
                                    }
                                    placeholder="Preis"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputRabatt1">
                                    Rabatt
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputRabatt1"
                                    value={rabatt.toString()}
                                    onChange={handleRabattChange}
                                    placeholder="Rabatt"
                                />
                                {rabattError && (
                                    <Form.Text className="text-danger">
                                        {rabattError}
                                    </Form.Text>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputDatum1">
                                    Datum
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputDatum1"
                                    value={datum}
                                    onChange={handleDatumChange}
                                    placeholder="Datum"
                                />
                                {datumError && (
                                    <Form.Text className="text-danger">
                                        {datumError}
                                    </Form.Text>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputHomepage1">
                                    Homepage
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputHomepage1"
                                    value={homepage}
                                    onChange={handleHomepageChange}
                                    placeholder="Homepage"
                                />
                                {homepageError && (
                                    <Form.Text className="text-danger">
                                        {homepageError}
                                    </Form.Text>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputSchlagwörter">
                                    Schlagwörter
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputSchlagwörter1"
                                    value={
                                        Array.isArray(schlagwörter)
                                            ? schlagwörter.join(', ')
                                            : ''
                                    }
                                    onChange={(event) =>
                                        setSchlagwörter(
                                            event.target.value.split(', '),
                                        )
                                    }
                                    placeholder="Schlagwörter"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputLieferbar1">
                                    Lieferbar
                                </label>
                                <Form.Check
                                    type="checkbox"
                                    id="exampleInputLieferbar1"
                                    checked={lieferbar}
                                    onChange={(event) =>
                                        setLieferbar(event.target.checked)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="exampleInpputBuchArt1">
                                    BuchArt
                                </label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light">
                                        {buchArt
                                            ? buchArt
                                            : 'BuchArt auswählen'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            onClick={() =>
                                                handleBuchArtChange('KINDLE')
                                            }
                                        >
                                            KINDLE
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() =>
                                                handleBuchArtChange(
                                                    'DRUCKAUSGABE',
                                                )
                                            }
                                        >
                                            DRUCKAUSGABE
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="card-body">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Buch erstellen
                                </button>
                            </div>
                            {error && (
                                <div className="error-message">{error}</div>
                            )}
                        </div>
                    </div>
                </div>
            </form>
            <Modal show={showPopup} onHide={handleClosePopup}>
                <Modal.Header closeButton>
                    <Modal.Title>Buch Angelegt</Modal.Title>
                </Modal.Header>
                <Modal.Body>Buch erfolgreich angelegt</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePopup}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
