import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Pages/navbar.tsx';
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
                <h3>Ein neues Buch anlegen</h3>
                <Formular />
            </>
        ),
    },
    {
        path: '/login',
        element: (
            <>
                <Navbar />
                <h3>Login</h3>
                <Login />
            </>
        ),
    },
    {
        path: '/search/isbn',
        element: (
            <>
                <Navbar />
                <h3>ISBN eingeben</h3>
                <FindByISBN />
            </>
        ),
    },
    {
        path: '/search/title',
        element: (
            <>
                <Navbar />
                <h3>Titel eingeben</h3>
                <FindByTitle />
            </>
        ),
    },
    {
        path: '/search/all',
        element: (
            <>
                <Navbar />
                <h3>Alle Bücher suchen</h3>
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
