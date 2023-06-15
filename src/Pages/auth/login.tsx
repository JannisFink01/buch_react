import axios from 'axios';
import React, { useState } from 'react';
import Formular from '../Post/form';
import LoginProps from '../../types/onLoginSuccess';
import Cookies from 'js-cookie';
import './Login.css';

export const Login = () => {
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const API_ENDPOINT = 'https://localhost:3000/auth/login';

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_ENDPOINT}`, {
        username: loginUser,
        password: loginPassword,
      });

      if (response.status === 200) {
        // Login erfolgreich
        const { token, roles } = response.data;
        // Speichern des Tokens und der Rolle im localStorage
        Cookies.set('token', token, { expires: 1 });
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('role', JSON.stringify(roles));
        console.log('Login erfolgreich');
        console.log('Token :' + '\n' + token + '\n' + 'Rollen' + '\n' + roles);
        console.log(Cookies.get('token'));
        // Führe weitere Aktionen aus, z.B. Weiterleitung zur nächsten Seite
      } else {
        // Login fehlgeschlagen
        console.log('Login fehlgeschlagen');
      }
    } catch (error) {
      console.error(error);
      setError('Falscher Benutzername oder falsches Passwort.');
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    if (name === 'loginUser') {
      setLoginUser(value);
    } else if (name === 'loginPassword') {
      setLoginPassword(value);
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h4>Login</h4>
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
              Benutzername
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
              Passwort
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
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
