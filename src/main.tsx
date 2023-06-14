import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Pages/navbar.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Formular from './Pages/Post/form.tsx';
import Get from './Pages/Get/get.tsx';
import { Login } from './Pages/auth/login.tsx';
import FindByISBN from './Pages/Get/findByISBN.tsx';
import FindByTitle from './Pages/Get/findByTitel.tsx';
import { App } from './App.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <App />
                <Navbar />
            </>
        ),
    },
    {
        path: '/create',
        element: (
            <>
              <h3>
                Ein neues Buch anlegen
              </h3>
                <Navbar />
                <Formular />
            </>
        ),
    },
    {
        path: '/login',
        element: (
            <>
              <h3>
                Login
              </h3>
                <Navbar />
                <Login />
            </>
        ),
    },
    {
        path: 'search/isbn',
        element: (
            <>
              <h3>
                ISBN eingeben
              </h3>
                <Navbar />
                <FindByISBN />
            </>
        ),
    },
    {
        path: 'search/title',
        element: (
            <>
              <h3>
                Titel eingeben
              </h3>
                <Navbar />
                <FindByTitle />
            </>
        ),
    },
    {
        path: 'search/all',
        element: (
            <>
              <h3>
                Alle Bücher suchen
              </h3>
              <Navbar />
              <Get />
            </>
        ),
    },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
