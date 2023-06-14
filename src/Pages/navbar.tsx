import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faPlus, faHouse } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavDropdown
                title={<span><FontAwesomeIcon icon={faSearch} /> Bücher suchen</span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/search/all">
                  Alle Bücher suchen
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/search/isbn">
                  Suche nach ISBN
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/search/title">
                  Suche nach Titel
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                <FontAwesomeIcon icon={faPlus} /> Neues Buch anlegen
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
