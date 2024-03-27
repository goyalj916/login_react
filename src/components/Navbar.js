import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* <nav
        className="navbar navbar-expand-lg navbar-default bg-dark nav-underline navbar-fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
              {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Registration">Registration Form</Link>
        </li> */}
              {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Registrationtable">Registration Details</Link>
        </li> */}
              {/* <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutus}</a>
        </li> */}
            {/* </ul>
            <form className="d-flex" role="search">
              <Link to="/Login" className="link-underline-light">
                <button className="btn btn-outline-success  btn-outline-light mx-2">
                  LogIn
                </button>
              </Link>
              <Link to="/Signup" className="link-underline-light">
                <button className="btn btn-outline-success  btn-outline-light">
                  Signup
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav> */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top navbar-default nav-underline "
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            {/* <img src="assets/img/navbar-logo.svg" alt="..." /> */}
            getHappiness
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <Link to="/Login" className="link-underline-light">
                    <button className="btn   btn-outline-warning mx-2">
                      LogIn
                    </button>
                  </Link>
                  <Link to="/Signup" className="link-underline-light">
                    <button className="btn   btn-outline-warning">
                      Signup
                    </button>
                  </Link>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  aboutus: PropTypes.string.isRequired,
};
