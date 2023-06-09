import axios from 'axios';
import { useEffect, useState } from 'react';
import Buch from '../../types/buchinterface';
import { Button } from 'react-bootstrap';
import BuchTable from './Booktable';
export default function BuchHeader() {
    const [buecher, setBuecher] = useState<Buch[]>([]);
    const [showTable, setShowTable] = useState(false);
    useEffect(() => {
        getBook();
    }, []);
    //import Buch from "../../types/buchinterface";
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
        <header className="buch-header">
            <BuchTable buecher={buecher} />
        </header>
    );
}
