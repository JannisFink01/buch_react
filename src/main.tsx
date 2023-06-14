import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Formular from './Pages/Post/form.tsx';
import Get from './Pages/Get/get.tsx';
import { Login } from './Pages/auth/login.tsx';
import FindByISBN from './Pages/Get/findByISBN.tsx';
import FindByTitle from './Pages/Get/findByTitel.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/create',
        element: <Formular />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: 'search/isbn',
        element: <FindByISBN />,
    },
    {
        path: 'search/title',
        element: <FindByTitle />,
    },
    {
        path: 'search/all',
        element: <Get />,
    },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
