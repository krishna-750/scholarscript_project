import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const PHONE = "917505020733"; // international format

export default function WhatsAppButton() {
  const openWhatsApp = (msg = "") => {
    const text = msg || "Hello, I need help with thesis services.";
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="floating-whatsapp"
      onClick={() => openWhatsApp()}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={20} />
      <span className="chat-label">Need help? Chat with us</span>
    </button>
  );
}
