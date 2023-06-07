import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Buch } from '../../types/buchinterface';
import BuchTable from './Booktable';


const BookSearch = () => {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchBooks();
  };
  const [bookIds, setBookIds] = useState('');
  const [buecher, setBooks] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBookIds(event.target.value);
  };
  

  const API_ENDPOINT = 'https://localhost:3000/rest';

  const searchBooks = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/${bookIds}`);
      if (response.data._embedded && response.data._embedded.buecher) {
        setBooks(response.data._embedded.buecher);
      } else {
        setBooks([]);
      }
      setError('');
    } catch (error) {
      console.error(error);
      setError('Fehler beim Abrufen der Bücher.');
      setBooks([]);
    }
  };

  // Restlicher Code...

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Book ISBN:
          <input type="text" className='form-control' placeholder='ISBN' value={bookIds} onChange={handleInputChange} />
        </label>
        <button type="submit" className="btn btn-primary">Search Books</button>
      </form>
      {error && <div>{error}</div>}
      {buecher.length > 0 && ( 
        <div>
          <h2>Books Found</h2>
          <ul>
            {buecher.map((book: Buch) => (
              <li key={book.isbn}>{book.titel.titel}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookSearch;
