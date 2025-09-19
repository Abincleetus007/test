import { useState } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import './Contact.css';

// ✅ Import Font Awesome React Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          {/* Phone */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <p>+91 0000000</p>
              <p>+91 ooooo</p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>info@</p>
          </div>

          {/* Location */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p>Kerala, India</p>
          </div>

          {/* Actions */}
          <div className="contact-actions">
            <WhatsAppButton 
              message="Hi, I'm interested in your construction services. Can you provide more information?"
              className="whatsapp-btn"
            />
            <a href="tel:+00000000" className="call-btn">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}