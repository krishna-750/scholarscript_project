
// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand">
          <Link to="/"><Logo /></Link>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </button>

        {/* Links */}
        {/* <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={pathname === "/services" ? "active" : ""} to="/services">Services</Link>
          <Link className={pathname === "/blog" ? "active" : ""} to="/blog">Blog</Link>
          <Link className={pathname === "/about" ? "active" : ""} to="/about">About</Link>
          <a href="#contact">Contact Us</a>
        </nav> */}

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
          {/* Scroll to Services section */}
          <a href="/services">Services</a>
          <Link className={pathname === "/blog" ? "active" : ""} to="/blog">Blog</Link>
          <Link className={pathname === "/Footer" ? "active" : ""} to="/about">About</Link>
          <a href="/Footer">Contact Us</a>
        </nav>


        <div className="nav-actions">
          <a className="call-btn" href="tel:+917505020733">Call Now</a>
        </div>
      </div>
    </header>
  );
}
