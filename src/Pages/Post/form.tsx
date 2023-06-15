import axios from 'axios';
import './form.css';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { Dropdown } from 'react-bootstrap';
import { handleErrorResponse } from './formerrors';

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
                setError('');
            } else {
                console.log('put fehlgeschlagen');
                console.log;
                handleErrorResponse(res, setError);
            }
        } catch (error: any) {
            console.error(error);
            console.log('FEHLER');
            handleErrorResponse(error.response, setError);
        }
    };
    const handleBuchArtChange = (value: string) => {
        setBuchArt(value);
    };

    return (
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
                                onChange={(event) =>
                                    setIsbn(event.target.value)
                                }
                                placeholder="ISBN"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputTitel1">Titel</label>
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
                            <label htmlFor="exampleInputRating1">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputRating1"
                                value={rating}
                                onChange={(event) =>
                                    setRating(Number(event.target.value))
                                }
                                placeholder="Rating"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPreis1">Preis</label>
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
                            <label htmlFor="exampleInputRabatt1">Rabatt</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputRabatt1"
                                value={rabatt.toString()}
                                onChange={(event) =>
                                    setRabatt(parseFloat(event.target.value))
                                }
                                placeholder="Rabatt"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputLieferbar1">
                                Lieferbar
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputLieferbar1"
                                value={lieferbar ? 'true' : 'false'}
                                onChange={(event) =>
                                    setLieferbar(event.target.value === 'true')
                                }
                                placeholder="Lieferbar"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputDatum1">Datum</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputDatum1"
                                value={datum}
                                onChange={(event) =>
                                    setDatum(event.target.value)
                                }
                                placeholder="Datum"
                            />
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
                                onChange={(event) =>
                                    setHomepage(event.target.value)
                                }
                                placeholder="Homepage"
                            />
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
                                    {buchArt ? buchArt : 'BuchArt auswählen'}
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
                                            handleBuchArtChange('DRUCKAUSGABE')
                                        }
                                    >
                                        DRUCKAUSGABE
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="card-body">
                            <button type="submit" className="btn btn-primary">
                                Buch erstellen
                            </button>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                    </div>
                </div>
            </div>
        </form>
    );
}