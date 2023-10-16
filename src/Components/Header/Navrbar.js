import React from 'react';
import "../../CSS/navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <h1  className="navbar-brand">
        M.Abdullah
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon rounded"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href='#home' className="nav-link active" style={{color:"#F77E17"}} >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href='#about' className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href='#services' className="nav-link">Services</a>
            </li> <li className="nav-item">
              <a href='#skills' className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a  href='#portfolio' className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a  href='#contactus' className="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
