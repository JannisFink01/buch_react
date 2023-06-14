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
                <Navbar />
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
        path: 'search/isbn',
        element: (
            <>
                <Navbar />
                <FindByISBN />
            </>
        ),
    },
    {
        path: 'search/title',
        element: (
            <>
                <Navbar />
                <FindByTitle />
            </>
        ),
    },
    {
        path: 'search/all',
        element: (
            <>
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
