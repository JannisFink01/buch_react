import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBrain, fas } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './navbar';
import { Link } from 'react-router-dom';

export function App() {
  return <div className='Buch'>
    <Navbar/>
    <header className='buch-header'>
    <h1 className='logo'>Welcome to BIGBOOKS!</h1>
    </header>
  </div>;
}