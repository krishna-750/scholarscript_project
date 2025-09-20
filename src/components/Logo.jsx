// src/components/Logo.jsx
import React from "react";
import "./Logo.css";

export default function Logo() {
    return (
        <div className="site-logo">
            <div className="logo-icon">📖</div> {/* open book emoji as placeholder */}
            <div className="logo-text">
                <div className="company-name">ScholarScript</div>
                <div className="slogan">We Write, You Succeed</div>
            </div>
        </div>
    );
}
