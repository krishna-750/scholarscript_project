import React, { useEffect, useState } from "react";

const MOCK = [
    { name: "Aarav S.", text: "ScholarScript made my thesis stress-free!" },
    { name: "Priya M.", text: "High-quality work and timely delivery." },
    { name: "Rahul K.", text: "I loved the proofreading service." },
    { name: "Sneha J.", text: "Great support for my dissertation." },
    { name: "Vikram D.", text: "Professional, responsive, and helpful." },
    { name: "Meera L.", text: "They guided me through every step." }
];

export default function TestimonialSlider({ items = MOCK, interval = 3500 }) {
    const [i, setI] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setI(prev => (prev + 1) % items.length), interval);
        return () => clearInterval(t);
    }, [items.length, interval]);

    return (
        <section className="testimonials container">
            <h2>See What Our Clients Say</h2>
            <div className="testimonial-wrap">
                {items.map((it, idx) => (
                    <div key={idx} className={`testimonial ${idx === i ? "active" : ""}`}>
                        <p className="quote">“{it.text}”</p>
                        <p className="author">— {it.name}</p>
                    </div>
                ))}
            </div>

            <div className="dots">
                {items.map((_, idx) => (
                    <button key={idx} onClick={() => setI(idx)} className={idx === i ? "dot active" : "dot"} />
                ))}
            </div>
        </section>
    );
}
