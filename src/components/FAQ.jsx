import React, { useState } from "react";
import "./FAQSection.css";


const FAQS = [
    { q: "Can you assist from Topic Selection to Thesis Submission?", a: "Yes! We provide complete support from Topic Selection to Thesis Submission, including proposal writing, research guidance, data analysis, and final editing Our experts ensure your thesis is well-structured, plagiarism-free, and ready for submission." },
    { q: "Is my data confidential or not?", a: "Yes! Your data is completely confidential and handled with strict privacy. We ensure all information shared remains secure and never disclosed." },
    { q: "How do revisions work?", a: "We offer flexible revisions to ensure your thesis meets your expectations.You can request updates or edits until you are fully satisfied with the final work." },
    { q: "Do you provide plagiarism & AI reports?", a: "Yes! We provide plagiarism and AI detection reports with every thesis.This ensures your work is original, authentic, and meets academic standards." },
    { q: "What are your timelines for Delivery?", a: "Our delivery timelines are tailored to your project size and requirements. We ensure prompt and timely submission without compromising on quality." },
    { q: "Can you align with University/Journal Guidelines?", a: "Absolutely. We customize work as per university and journal requirements." }
];

export default function FAQSection() {
    const [open, setOpen] = useState(null);

    const openWhatsApp = (msg) => {
        const url = `https://wa.me/917505020733?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="faq">
            <h2>Frequently Asked Questions</h2>
            <p className="faq-subtitle">Clear answers to the most common queries from our Beloved Scholars.</p>
            <div className="faq-list">
                {FAQS.map((item, i) => (
                    <div key={i} className="faq-item">
                        <button onClick={() => setOpen(open === i ? null : i)}>
                            {item.q}
                            <span>{open === i ? "-" : "+"}</span>
                        </button>
                        {open === i && <p>{item.a}</p>}
                    </div>
                ))}
            </div>

            {/* Ask your own question */}
            <div className="faq-ask">
                <h3>Didn’t find your question?</h3>
                <input type="text" placeholder="Type your question..." id="userQuestion" />
                <button
                    onClick={() => {
                        const q = document.getElementById("userQuestion").value;
                        openWhatsApp(`User question: ${q}`);
                    }}
                >
                    Ask on WhatsApp
                </button>
            </div>
        </section>
    );
}
