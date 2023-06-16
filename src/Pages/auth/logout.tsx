import { useState } from 'react';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';

export const Logout = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleLogout = () => {
        Cookies.remove('token');
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <button className="nav-link" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>

            <Modal show={showPopup} onHide={handleClosePopup}>
                <Modal.Header closeButton>
                    <Modal.Title>Logged Out</Modal.Title>
                </Modal.Header>
                <Modal.Body>Sie haben sich erfolgreich abgemeldet</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePopup}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Logout;
