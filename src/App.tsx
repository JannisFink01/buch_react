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
<<<<<<< HEAD
import Navbar from './Pages/navbar';
import Formular from './Pages/Post/form';

export function App() {
    const [buecher, setBuecher] = useState<Buch[]>([]);
    const [showTable, setShowTable] = useState(false);
    const username = localStorage.getItem('username');

=======
import Formular from './Pages/Post/form';
import handleLoginSuccess from './types/onLoginSuccess';
import onLoginSuccess from './types/onLoginSuccess';
export function App() {
    const [buecher, setBuecher] = useState<Buch[]>([]);
    const [showTable, setShowTable] = useState(false);
    const username = localStorage.getItem('username');

>>>>>>> 786c3bf1878c1ec519748b561681290aa522b46c
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
<<<<<<< HEAD

=======
>>>>>>> 786c3bf1878c1ec519748b561681290aa522b46c
    return (
        <div className="Buch">
            <h1>Bücher suchen</h1>
            <div className="bücher-menu">
<<<<<<< HEAD
                <Navbar />
                <Login />
                <FindByTitle />
                <FindByISBN />
                <Formular />
=======
                <React.StrictMode>
                    <Login />
                </React.StrictMode>
                <React.StrictMode>
                    <FindByTitle />
                </React.StrictMode>
                <React.StrictMode>
                    <FindByISBN />
                </React.StrictMode>
                <React.StrictMode>
                    <Formular />
                </React.StrictMode>
>>>>>>> 786c3bf1878c1ec519748b561681290aa522b46c
            </div>
            <header className="buch-header">
                <Button onClick={getBook}>Get Book</Button>
                {showTable && <BuchTable buecher={buecher} />}
            </header>
        </div>
    );
}
