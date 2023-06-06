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
    <h1>Bücher anlegen</h1>
      <form>
  <div className="form-group">
    <label htmlFor="exampleInputisbn1">ISBN</label>
    <input type="isbn" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ISBN"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputTitel1">Titel</label>
    <input type="Titel" className="form-control" id="exampleInputTitel1" placeholder="Titel"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputUnterttitel1">Untertitel</label>
    <input type="Untertitel" className="form-control" id="exampleInputuntertitel1" aria-describedby="untertitelHelp" placeholder="Enter untertitel"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputRating1">Rating</label>
    <input type="Rating" className="form-control" id="exampleInputRating1" aria-describedby="RatingHelp" placeholder="Enter Rating"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputArt1">Art</label>
    <input type="Art" className="form-control" id="exampleInputArt1" aria-describedby="RatingHelp" placeholder="Enter Art"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPreis1">Art</label>
    <input type="Art" className="form-control" id="exampleInputArt1" aria-describedby="RatingHelp" placeholder="Enter Art"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    <header className='buch-header'>
      <Button onClick={getBook}>Get Book</Button>
      {showTable&&<BuchTable buecher ={buecher}/>}
     </header>
     
 </div>	
}