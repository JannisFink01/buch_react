import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faSignInAlt,
  faPlus,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import { NavDropdown } from 'react-bootstrap';
import './navbar.css';
import { Logout } from './auth/logout';

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  const handleLinkClick = () => {
    setIsExpanded(false); // Schließt die Toggle-Navigation
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faBook} /> BIGBOOKS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isExpanded ? 'show' : ''
          }`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavDropdown
                title={
                  <span>
                    <FontAwesomeIcon icon={faSearch} /> Bücher suchen
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/search/all" onClick={handleLinkClick}>
                  Alle Bücher
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/search/isbn" onClick={handleLinkClick}>
                  Suche nach ISBN
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/search/title" onClick={handleLinkClick}>
                  Suche nach Titel
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faPlus} /> Buch anlegen
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
            </li>
            <li className="nav-item text-center" onClick={handleLinkClick}>
              <Logout/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
