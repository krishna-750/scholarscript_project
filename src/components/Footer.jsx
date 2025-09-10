import React from "react";

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-grid">
                <div className="footer-col">
                    <h4>About ScholarScript</h4>
                    <p>ScholarScript delivers research & thesis writing support with a team of academic experts. Confidentiality and on-time delivery guaranteed.</p>
                    <div className="socials">
                        <a href="#" aria-label="facebook">FB</a>
                        <a href="#" aria-label="twitter">TW</a>
                        <a href="#" aria-label="linkedin">LI</a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Recent Posts</h4>
                    <ul className="footer-links">
                        <li><a href="/blog">How to write a literature review</a></li>
                        <li><a href="/blog">Selecting research methodology</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/testimonials">Testimonials</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:info@scholarscript.com">info@scholarscript.com</a></p>
                    <p>Phone: <a href="tel:+917505020733">+91 7505020733</a></p>
                    <p>Office: Your city, State (placeholder)</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} ScholarScript. All rights reserved.</p>
            </div>
        </footer>
    );
}
