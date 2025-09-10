import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const scrollToContact = (e) => {
    e.preventDefault();
    const footer = document.querySelector("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/">ScholarScript</Link>
        </div>

        <nav className="nav-links">
          <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={pathname === "/services" ? "active" : ""} to="/services">Services</Link>
          <Link className={pathname === "/blog" ? "active" : ""} to="/blog">Blog</Link>
          <Link className={pathname === "/testimonials" ? "active" : ""} to="/testimonials">Testimonials</Link>
          <Link className={pathname === "/about" ? "active" : ""} to="/about">About</Link>
          <a href="#contact" onClick={scrollToContact}>Contact Us</a>
        </nav>

        <div className="nav-actions">
          <a className="call-btn" href="tel:+917505020733">Call: +91 7505020733</a>
        </div>
      </div>
    </header>
  );
}
