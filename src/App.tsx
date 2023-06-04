import React, { useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Pages/navbar';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Buch } from './types/buchinterface';
import BuchTable from './Pages/Get/Booktable';


export function App() {
  const [buecher, setBuecher]=useState<Buch[]>([])
  const [showTable, setShowTable] = useState(false);

  const getBook =()=>{
    axios
    .get('https://localhost:3000/rest')
    .then(res =>{
      console.log(res.data._embedded.buecher)
      setBuecher(res.data._embedded.buecher)
      setShowTable(true)
    }).catch(err=>{
      console.log(err)
    })
  }
  return <div className='Buch'>
    <Navbar/>
    <header className='buch-header'>
      <Button onClick={getBook}>Get Book</Button>
      {showTable&&<BuchTable buecher ={buecher}/>}
     </header>
 </div>	
}