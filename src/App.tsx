import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Buch } from './types/buchinterface';
import BuchTable from './Pages/Get/Booktable';
import FindByISBN from './Pages/Get/findByISBN';
import FindByTitle from './Pages/Get/findByTitel';
import { Login } from './Pages/auth/login';
import Navbar from './Pages/navbar';
import Formular from './Pages/Post/form';

export function App() {
    const [buecher, setBuecher] = useState<Buch[]>([]);
    const [showTable, setShowTable] = useState(false);
    const username = localStorage.getItem('username');

    const getBook = () => {
        axios
            .get('https://localhost:3000/rest')
            .then((res) => {
                console.log(res.data._embedded.buecher);
                setBuecher(res.data._embedded.buecher);
                setShowTable(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="Buch">
            <h1>Bücher suchen</h1>
            <div className="bücher-menu">
                <Navbar />
                <Login />
                <FindByTitle />
                <FindByISBN />
                <Formular />
            </div>
            <header className="buch-header">
                <Button onClick={getBook}>Get Book</Button>
                {showTable && <BuchTable buecher={buecher} />}
            </header>
        </div>
    );
}
