import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a id="home" className="navbar-brand" href="/">
            Federico Trotta
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-paw"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/proyectos">
                  <i className="fas fa-briefcase"></i> Works
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/sobre-mi">
                  <i className="fas fa-kiss-wink-heart"></i> About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  <i className="fas fa-address-card"></i> Contact me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/educacion">
                  <i className="fas fa-user-graduate"></i>Education
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>
              Welcome to
              <i> my page </i>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
