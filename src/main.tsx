<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//import ErrorPage from "./Pages/error-page.jsx"

const router = createBrowserRouter([
  {
    path: '/',
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
>>>>>>> e3ab21f2c90a7b2eec069caf198803eb08971ab4
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
<<<<<<< HEAD
  </React.StrictMode>,
=======
  </React.StrictMode>
>>>>>>> e3ab21f2c90a7b2eec069caf198803eb08971ab4
);
