import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <button
        className="navbar-toggler pull-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item gns-nav-align">
            <a className="nav-link" href="index.html">
              About
            </a>
          </li>
          <li className="nav-item active gns-nav-align">
            <a className="nav-link" href="portfolio.html">
              Portfolio<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item gns-nav-align">
            <a className="nav-link" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
