// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "./Logo"; // Make sure your Logo component is correct
// import "./Footer.css";

// const servicesList = [
//     "Thesis Writing",
//     "Admission Proposal",
//     "Research Proposal",
//     "Proofreading & Editing",
//     "Review Paper Support",
//     "Synopsis Writing",
// ];

// export default function Footer() {
//     return (
//         <footer className="footer">
//             <div className="footer-container">

//                 {/* About + Logo */}
//                 <div className="footer-col about">
//                     <div className="footer-logo">
//                         <Logo />
//                     </div>
//                     <p>
//                         ScholarScript provides <strong>thesis, dissertation, and research writing support</strong> by experienced academic writers.
//                         We guarantee <strong>confidentiality</strong> and <strong>on-time delivery</strong> for all projects.
//                     </p>
//                 </div>

//                 {/* Quick Links */}
//                 <div className="footer-col links">
//                     <h4>Quick Links</h4>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/services">Services</Link></li>
//                         <li><Link to="/blog">Blog</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/contact">Contact Us</Link></li>
//                     </ul>
//                 </div>

//                 {/* Our Services */}
//                 <div className="footer-col services">
//                     <h4>Our Services</h4>
//                     <ul>
//                         {servicesList.map((service, idx) => (
//                             <li key={idx}>{service}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Call Now */}
//                 <div className="footer-col call">
//                     <h4>Call Now</h4>
//                     <p>
//                         <a href="tel:+917505020733" className="call-btn">+91 7505020733</a>
//                     </p>
//                     <p>We are here to assist you with your thesis and research requirements.</p>
//                 </div>
//             </div>

//             {/* Footer Bottom */}
//             <div className="footer-bottom">
//                 <p>© {new Date().getFullYear()} ScholarScript. All rights reserved.</p>
//             </div>
//         </footer>
//     );
// }


import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Ensure your Logo component exists
import "./Footer.css";

const servicesList = [
    "Thesis Writing",
    "Admission Proposal",
    "Research Proposal",
    "Proofreading & Editing",
    "Review Paper Support",
    "Synopsis Writing",
];

export default function Footer() {
    return (
        <footer className="footer">

            {/* Top Section: "You Succeed" */}
            <div className="footer-top">
                <h2><span>ScholarScript</span></h2>
            </div>

            <div className="footer-container">

                {/* About + Logo */}
                <div className="footer-col about">
                    <div className="footer-logo">
                        <Logo />
                    </div>
                    <p>
                        ScholarScript provides <strong>thesis, dissertation, and research writing support</strong> by experienced academic writers.
                        We guarantee <strong>confidentiality</strong> and <strong>on-time delivery</strong> for all projects.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-col links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Our Services */}
                <div className="footer-col services">
                    <h4>Our Services</h4>
                    <ul>
                        {servicesList.map((service, idx) => (
                            <li key={idx}>• {service}</li>
                        ))}
                    </ul>
                </div>

                {/* Call Now for Services */}
                <div className="footer-col call">
                    <h4>Call Now for Services</h4>
                    <p>📞 <a href="tel:+917505020733">+91 7505020733</a></p>
                    <p>📧 <a href="mailto:info@scholarscript.com">info@scholarscript.com</a></p>
                    <p>📍 Your city, State, India</p>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} ScholarScript. All rights reserved.</p>
            </div>

        </footer>
    );
}
