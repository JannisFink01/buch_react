import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
            <FontAwesomeIcon icon={faBrain} className='Brainlogo'/>
            <h1 className='title'>BIGBOOKS</h1>
      <FontAwesomeIcon icon={faBrain} className='Brainlogo'/>
      <h1 className='title'>BIGBOOKS</h1>
      <Button className= 'B1' style={{ marginRight: '10px' }}>create </Button>
      <Button className= 'B2' style={{ marginRight: '10px' }}>Search for Books </Button>
      {/* Weitere Navigationslinks oder Inhalte */}
    </nav>
  );
}

export default Navbar;
