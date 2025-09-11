import React, { useState, useRef } from "react";
import "./FloatingContactForm.css";

const PHONE = "917505020733";
const EMAIL = "panditkrishna4624@gmail.com"; // your email

export default function FloatingContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const formRef = useRef(); // reference to the form

    const onSubmitWhatsApp = (e) => {
        e.preventDefault();
        const fd = new FormData(formRef.current);
        const name = fd.get("name") || "No name";
        const topic = fd.get("topic") || "No topic";
        const deadline = fd.get("deadline") || "Not specified";

        const message = `Hello, my name is ${name}. I need help with thesis on "${topic}". Deadline: ${deadline}.`;
        window.open(
            `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const onSubmitEmail = (e) => {
        e.preventDefault();
        const fd = new FormData(formRef.current);
        const name = fd.get("name") || "No name";
        const topic = fd.get("topic") || "No topic";
        const deadline = fd.get("deadline") || "Not specified";

        const subject = `Thesis Help Request from ${name}`;
        const body = `Hello,\n\nMy name is ${name}.\nTopic: ${topic}\nDeadline: ${deadline}`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className={`floating-form ${isOpen ? "open" : ""}`}>
            {/* Toggle Button */}
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "✉"}
            </button>

            {/* Form */}
            <div className={`form-box ${isOpen ? "slide-up" : "slide-down"}`}>
                {isOpen && (
                    <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
                        <h3>Share your details</h3>

                        <label>
                            Name
                            <input name="name" required />
                        </label>
                        <label>
                            Email
                            <input name="email" type="email" required />
                        </label>
                        <label>
                            Thesis Topic
                            <input name="topic" required />
                        </label>
                        <label>
                            Deadline
                            <input name="deadline" type="date" />
                        </label>

                        <div className="btn-group">
                            <button className="btn whatsapp" onClick={onSubmitWhatsApp}>
                                📱 WhatsApp
                            </button>
                            <button className="btn email" onClick={onSubmitEmail}>
                                📧 Email
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
