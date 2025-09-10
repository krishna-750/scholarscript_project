import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="container page contact-page">
      <h1>Contact Us</h1>
      <p>Send us your project details — or click the WhatsApp button at the bottom-right to chat instantly.</p>
      <ContactForm />
    </section>
  );
}
