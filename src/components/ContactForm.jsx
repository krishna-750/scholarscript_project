import React from "react";

const PHONE = "917505020733";

export default function ContactForm() {
    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const name = fd.get("name") || "No name";
        const topic = fd.get("topic") || "No topic";
        const deadline = fd.get("deadline") || "Not specified";
        const email = fd.get("email") || "No email";
        const message = `Hello, my name is ${name}. I need help with thesis on "${topic}". Deadline: ${deadline}. Email: ${email}`;
        window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    };

    return (
        <form className="contact-form" onSubmit={onSubmit}>
            <label>
                Name <input name="name" required />
            </label>
            <label>
                Email <input name="email" type="email" />
            </label>
            <label>
                Thesis Topic <input name="topic" required />
            </label>
            <label>
                Deadline <input name="deadline" type="date" />
            </label>
            <button className="btn" type="submit">Send via WhatsApp</button>
        </form>
    );
}
