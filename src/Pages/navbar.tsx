import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            BigBooks
          </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/../Get/get.tsx"> create</a>
          </li>
          <li>
            <a href="#">search</a>
          </li>
        </ul>
        {/* Weitere Navigationslinks oder Inhalte */}
      </div>
    </nav>
  );
}

export default Navbar;
