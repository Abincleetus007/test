import React from "react";
import "./FloatingEnquiry.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FloatingEnquiry = () => {
  // Pre-filled WhatsApp message
  const whatsappMessage = encodeURIComponent(
    "Hi, I would like to make an enquiry."
  );

  return (
    <div className="floating-enquiry">
      {/* Quote Button */}
      <button
        className="enquiry-btn"
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        GET A FREE QUOTE
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/7012599817?text=${whatsappMessage}`}
        className="icon-btn whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

      {/* Call */}
      <a href="tel:+919876543210" className="icon-btn call">
        <FontAwesomeIcon icon={faPhone} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourprofile"
        className="icon-btn instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default FloatingEnquiry;
