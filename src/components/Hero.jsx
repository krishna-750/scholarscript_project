import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero container">
            <div className="hero-left">
                <h1>Professional Thesis & Dissertation Help</h1>
                <p className="lead">Get expert guidance, original content, and timely delivery from experienced researchers and writers.</p>
                <div className="hero-cta">
                    <Link to="/services" className="btn">Browse Services</Link>
                    <a className="btn btn-outline" href="https://wa.me/917505020733?text=I%20need%20thesis%20help" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </div>
            </div>
            <div className="hero-right">
                {/* Replace with an image or illustration */}
                <div className="hero-card">
                    <div className="badge">99% Satisfaction</div>
                </div>
            </div>
        </section>
    );
}
