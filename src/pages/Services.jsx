import React from "react";

const services = [
  { title: "Thesis Writing", desc: "Custom thesis writing from scratch." },
  { title: "Dissertation Assistance", desc: "Help with chapters, editing & submission." },
  { title: "Research Paper", desc: "Paper drafting & journal submission help." },
  { title: "Proofreading & Editing", desc: "Grammar, flow, formatting." },
  { title: "Formatting & Citations", desc: "APA / MLA / IEEE formatting." },
  { title: "Plagiarism Check", desc: "Ensure originality with checks and fixes." }
];

export default function Services() {
  return (
    <section className="container page services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a className="card-cta" href={`https://wa.me/917505020733?text=I%20need%20${encodeURIComponent(s.title)}`} target="_blank" rel="noopener noreferrer">Get Started</a>
          </div>
        ))}
      </div>
    </section>
  );
}
