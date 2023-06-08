import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Buch } from '../../types/buchinterface';
import BuchTable from './Booktable';

const FindByTitle = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [buecher, setBooks] = useState<Buch[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState('');

  const API_ENDPOINT = 'https://localhost:3000/rest';

  const searchBooks = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}?titel=${bookTitle}`);
      if (response.data._embedded && response.data._embedded.buecher) {
        setBooks(response.data._embedded.buecher);
        setShowTable(true);
        setError('');
      } else {
        setBooks([]);
        setShowTable(false);
        setError('No books found.');
      }
    } catch (error) {
      console.error(error);
      setError('Error retrieving books.');
      setBooks([]);
      setShowTable(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchBooks();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Book Title:
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={bookTitle}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Search Books
        </button>
      </form>
      {error && <div>{error}</div>}
      {buecher.length > 0 && (
        <div>
          <h2>Books Found</h2>
          {showTable && <BuchTable buecher={buecher} />}
        </div>
      )}
    </div>
  );
};

export default FindByTitle;
