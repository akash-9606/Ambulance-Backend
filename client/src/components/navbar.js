import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="fixed-navbar-container">
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <h2>Life+</h2>
          </div>

          {/* Navbar Links */}
          <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <Link className="nav-link" to="/request-ambulance">
              Request Ambulance
            </Link>
            <Link className="nav-link" to="/track-ambulance">
              Track Ambulance
            </Link>
            <Link className="nav-link" to="/SignIn">
              Login
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
