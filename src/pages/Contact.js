import { useState } from "react";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/footer";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will contact you soon!");
  };

  return (
    <>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          <strong>If You Have Any Query, Please Feel Free To Contact Us</strong>
        </p>

        <div className="contact-content">
          {/* Left - Info Section */}
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <p>Crystal Builders, Kochi, Kerala, India</p>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <div>
                <p>+91 9876543210</p>
                <p>+91 9123456780</p>
              </div>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <p>info@crystalbuilders.com</p>
            </div>

            <div className="contact-actions">
              <WhatsAppButton
                message="Hi, I would like to make an enquiry."
                className="whatsapp-btn"
              />
              <a href="tel:+919876543210" className="call-btn">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Google Map */}
      <div className="contact-map">
       <div className="contact-map">
  <div className="contact-map">
  <iframe
    title="Crystal Builders Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.128898103713!2d76.673315!3d8.9602686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0609d2b8a5473b%3A0xb23213f8f7bc400f!2sCrystal%20Builders!5e0!3m2!1sen!2sin!4v1759851787342!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</div>


      </div>

      <Footer />
    </>
  );
}
