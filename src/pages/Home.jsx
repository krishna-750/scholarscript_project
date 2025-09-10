import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialSlider from "../components/TestimonialSlider";
import { Link } from "react-router-dom";

const popular = [
  { title: "Thesis Writing", desc: "Full thesis writing service tailored to your requirements." },
  { title: "Dissertation Help", desc: "Assistance with structure, methodology & editing." },
  { title: "Research Paper Support", desc: "Drafting and submission support for journals." }
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container features">
        <h2>Popular Services</h2>
        <div className="services-grid">
          {popular.map((s, idx) => <ServiceCard key={idx} {...s} />)}
        </div>
        <div className="center">
          <Link to="/services" className="btn">View All Services</Link>
        </div>
      </section>

      <TestimonialSlider />

      <section className="container cta-strip">
        <div className="cta-inner">
          <h3>Need help now?</h3>
          <p>Chat with our advisors on WhatsApp to get a free quote.</p>
          <a className="btn" href="https://wa.me/917505020733?text=I%20need%20a%20quote" target="_blank" rel="noopener noreferrer">Chat Now</a>
        </div>
      </section>
    </>
  );
}
