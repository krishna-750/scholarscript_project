import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "917505020733";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const text = "Hello, I need help with thesis services.";
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="whatsapp-wrapper">
      <button
        className="floating-whatsapp"
        onClick={openWhatsApp}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </button>
      <span className="whatsapp-tooltip">Chat with us</span>
    </div>
  );
}
