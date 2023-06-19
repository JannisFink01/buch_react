import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function App() {
    return (
        <div className="Buch">
            <Card>
                <Card.Img
                    variant="top"
                    src="images/pexels-gül-işık-2128249.jpg"
                />
                <Card.Body>
                    <h1>Willkommen bei BIGBOOKS!</h1>
                    <Button variant="primary" className="w-100 mb-3">
                        <Link to="/create" className="nav-link">
                            <FontAwesomeIcon icon={faPlus} /> Buch anlegen
                        </Link>
                    </Button>
                    <Button variant="primary" className="w-100 mb-3">
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="primary"
                                className="custom-dropdown-toggle"
                            >
                                <FontAwesomeIcon icon={faSearch} /> Bücher
                                suchen
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/search/all">
                                    Alle Bücher
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/search/isbn">
                                    Suche nach ISBN
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/search/title">
                                    Suche nach Titel
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Button>
                </Card.Body>
            </Card>
            <div className="bücher-menu"></div>
        </div>
    );
}
