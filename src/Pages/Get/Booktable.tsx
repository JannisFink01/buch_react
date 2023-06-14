<<<<<<< HEAD
import React from 'react';
import { Buch } from '../../types/buchinterface.tsx';
=======
import React from "react";
import { Buch } from "../../types/buchinterface.tsx";
>>>>>>> e3ab21f2c90a7b2eec069caf198803eb08971ab4

const BuchTable = ({ buecher }: { buecher: Buch[] }) => {
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
            <td>{buch.rating}</td>
            <td>{buch.art}</td>
            <td>{buch.preis}</td>
            <td>{buch.rabatt}</td>
            <td>{buch.lieferbar ? "Yes" : "No"}</td>
            <td>{buch.datum}</td>
            <td>{buch.homepage}</td>
            <td>{buch.schlagwoerter}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BuchTable;
