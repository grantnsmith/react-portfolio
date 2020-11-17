import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
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
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              About Me
            </NavLink>
          </li>
          <li className="nav-item gns-nav-align">
            <NavLink
              to="/portfolio"
              activeClassName="active"
              className="nav-link"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item gns-nav-align">
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-link"
            >
              Get in Touch
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
