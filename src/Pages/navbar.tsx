import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <NavDropdown title="Search" id="basic-nav-dropdown">
                        <Link className="dropdown-item" to="/search/isbn">
                            Search ISBN
                        </Link>
                        <Link className="dropdown-item" to="/search/title">
                            Search Title
                        </Link>
                        <Link className="dropdown-item" to="search/all">
                            Search All
                        </Link>
                    </NavDropdown>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
