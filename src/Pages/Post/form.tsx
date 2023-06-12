import axios from "axios";
import { useState } from "react";
interface FormularProps {
  token: string;
}
export default function Formular() {
  const [isbn, setIsbn] = useState("");
  const [titel, setTitel] = useState("");
  const [untertitel, setUntertitel] = useState("");
  const [rating, setRating] = useState(0);
  const [buchArt, setBuchArt] = useState("");
  const [preis, setPreis] = useState(0.0);
  const [rabatt, setRabatt] = useState(0.0);
  const [lieferbar, setLieferbar] = useState(true);
  const [datum, setDatum] = useState("");
  const [homePage, setHomepage] = useState("");
  const [schlagwörter, setSchlagwörter] =  useState<string[]>([]);
  const API_ENDPOINT = 'https://localhost:3000/rest';
  const token = localStorage.getItem('token');
  const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      const uniqueSchlagwoerter = [...new Set(schlagwörter)];
  const payload={
    isbn: isbn,
    titel: {
      titel: titel,
      untertitel: untertitel
    },
    rating: rating,
    art: buchArt,
    preis: preis,
    rabatt: rabatt,
    lieferbar: lieferbar,
    datum: datum,
    homePage: homePage,
    schlagwoerter: uniqueSchlagwoerter,
    abbildungen: [
      {
        beschriftung: 'Abb. 1',
        contentType: 'img/png',
      },]
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try {
     
      const res = await axios
      .post(`${API_ENDPOINT}`,payload,config
      );
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
          schlagwörter
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
          schlagwörter
        });
      } else {
        console.log("put fehlgeschlagen");
        console.log
      }
    } catch (error) {
      console.error(error);
      console.log("FEHLER");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInputIsbn1">ISBN</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputIsbn1"
              value={isbn}
              onChange={(event) => setIsbn(event.target.value)}
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
              onChange={(event) => setTitel(event.target.value)}
              placeholder="Titel"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputUntertitel1">Untertitel</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUntertitel1"
              value={untertitel}
              onChange={(event) => setUntertitel(event.target.value)}
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
              onChange={(event) => setRating(Number(event.target.value))}
              placeholder="Rating"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInpputBuchArt1">BuchArt</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputBuchArt1"
              value={buchArt}
              onChange={(event) => setBuchArt(event.target.value)}
              placeholder="BuchArt"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPreis1">Preis</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPreis1"
              value={preis}
              onChange={(event) => setPreis(Number(event.target.value))}
              placeholder="Preis"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputRabatt1">Rabatt</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputRabatt1"
              value={rabatt.toString()}
              onChange={(event) => setRabatt(Number(event.target.value))}
              placeholder="Rabatt"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLieferbar1">Lieferbar</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLieferbar1"
              value={lieferbar? 'true' : 'false'}
              onChange={(event) => setLieferbar(event.target.value==='true')}
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
              onChange={(event) => setDatum(event.target.value)}
              placeholder="Datum"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputHomePage1">HomePage</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputHomepage1"
              value={homePage}
              onChange={(event) => setHomepage(event.target.value)}
              placeholder="HomePage"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputSchlagwörter">Schlagwörter</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSchlagwörter1"
              value={schlagwörter}
              onChange={(event) => setSchlagwörter(event.target.value)}
              placeholder="Schlagwörter"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Buch erstellen
          </button>
        </div>
      </div>
    </form>
  );
}