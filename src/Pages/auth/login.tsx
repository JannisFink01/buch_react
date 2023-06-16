import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Login = () => {
    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');
    const [success, setSuccess] = useState('');

    const API_ENDPOINT = 'https://localhost:3000/auth/login';

    const handleLogin = async () => {
        try {
            setError('');
            setSuccess('');
            const response = await axios.post(`${API_ENDPOINT}`, {
                username: loginUser,
                password: loginPassword,
            });
            setLoginPassword('');
            setLoginUser('');

            if (response.status === 200) {
                // Login erfolgreich
                const { token, roles } = response.data;
                // Speichern des Tokens und der Rolle im localStorage
                setSuccess('Angemeldet als: ' + roles.join(', '));
                Cookies.set('token', token, { expires: 1 });
                setToken(token);
                localStorage.setItem('token', token);
                localStorage.setItem('role', JSON.stringify(roles));
                console.log('Login erfolgreich');
                console.log(
                    'Token :' + '\n' + token + '\n' + 'Rollen' + '\n' + roles,
                );
                console.log(Cookies.get('token'));
                // Führe weitere Aktionen aus, z.B. Weiterleitung zur nächsten Seite
            } else {
                // Login fehlgeschlagen
                console.log('Login fehlgeschlagen');
            }
        } catch (error) {
            console.error(error);
            setError('Falscher Benutzername oder falsches Passwort.');
            setLoginPassword('');
            setLoginUser('');
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'loginUser') {
            setLoginUser(value);
        } else if (name === 'loginPassword') {
            setLoginPassword(value);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card w-50">
                <div className="card-body d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faUser} size="2x" className="mb-2" />
                    <h5 className="fw-bold">Login</h5>
                </div>
                <form>
                    <div className="form-outline mb-4">
                        <input
                            type="User"
                            id="form2Example1"
                            className="form-control"
                            name="loginUser"
                            value={loginUser}
                            onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="form2Example1">
                            <span className="fw-normal">Benutzername</span>
                        </label>
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            id="form2Example2"
                            className="form-control"
                            name="loginPassword"
                            value={loginPassword}
                            onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="form2Example2">
                            <span className="fw-normal">Passwort</span>
                        </label>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary btn-block mb-4"
                        onClick={handleLogin}
                    >
                        Anmelden
                    </button>
                </form>
                {error && (
                    <div
                        className="error-message"
                        style={{ marginBottom: '10px' }}
                    >
                        {error}
                    </div>
                )}
                {success && (
                    <div
                        className="success-message"
                        style={{ marginBottom: '10px' }}
                    >
                        {success}
                    </div>
                )}
            </div>
        </div>
    );
};
