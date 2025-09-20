// // src/components/Hero.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Hero.css"; // Import the new CSS file

// export default function Hero() {
//     return (
//         <section className="hero">
//             <div className="container hero-inner">
//                 {/* Left Content */}
//                 <div className="hero-left" data-aos="fade-right">
//                     <h1>
//                         Professional <span>Thesis & Dissertation</span> Help
//                     </h1>
//                     <p className="lead">
//                         Get expert guidance, original content, and timely delivery
//                         from experienced researchers and writers.
//                     </p>
//                     <div className="hero-cta">
//                         <Link to="/services" className="btn primary-btn">Browse Services</Link>
//                         <a
//                             className="btn outline-btn"
//                             href="https://wa.me/917505020733?text=I%20need%20thesis%20help"
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             Chat on WhatsApp
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right Content - Card */}
//                 <div className="hero-right" data-aos="fade-left">
//                     <div className="hero-card">
//                         <div className="badge">99% Satisfaction</div>
//                         <img
//                             src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
//                             alt="Open Book Illustration"
//                             className="hero-img"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-inner">
                <div className="hero-left" data-aos="fade-right">
                    <h1>
                        <span>Professional Thesis & Dissertation Help</span>
                    </h1>
                    <p className="lead">
                        Get expert guidance, original content, and timely delivery from
                        experienced researchers and writers.
                    </p>
                    <div className="hero-cta">
                        <Link to="/services" className="btn primary-btn">
                            Browse Services
                        </Link>
                        <a
                            className="btn outline-btn"
                            href="https://wa.me/917505020733?text=I%20need%20thesis%20help"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div className="hero-right" data-aos="fade-left">
                    <div className="hero-card">
                        <div className="badge">99% Satisfaction</div>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
                            alt="Books"
                            className="hero-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
