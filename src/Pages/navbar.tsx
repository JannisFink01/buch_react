import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light fixed-top"
            style={{ backgroundColor: '#e3f2fd' } as React.CSSProperties}
        >
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <NavDropdown title="Suche" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/search/isbn">
                                Suche nach ISBN
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/search/title">
                                Suche nach Titel
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/search/all">
                                Alle Bücher suchen
                            </NavDropdown.Item>
                        </NavDropdown>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">
                                Neues Buch anlegen
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
