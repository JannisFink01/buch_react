import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Pages/navbar.tsx';
import './main.css';
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
                <Navbar />
                <App />
            </>
        ),
    },
    {
        path: '/create',
        element: (
            <>
                <Navbar />
                <h4>Ein neues Buch anlegen</h4>
                <Formular />
            </>
        ),
    },
    {
        path: '/login',
        element: (
            <>
                <Navbar />
                <Login />
            </>
        ),
    },
    {
        path: '/search/isbn',
        element: (
            <>
                <Navbar />
                <h4>ISBN eingeben</h4>
                <FindByISBN />
            </>
        ),
    },
    {
        path: '/search/title',
        element: (
            <>
                <Navbar />
                <h4>Titel eingeben</h4>
                <FindByTitle />
            </>
        ),
    },
    {
        path: '/search/all',
        element: (
            <>
                <Navbar />
                <h4>Alle Bücher suchen</h4>
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
