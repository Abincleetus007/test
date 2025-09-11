import { useState } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import './Contact.css';

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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <p>+910000000</p>
              <p>+91 ooooo</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>info@</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Kerala, India</p>
          </div>
          <div className="contact-actions">
            <WhatsAppButton 
              message="Hi, I'm interested in your construction services. Can you provide more information?"
              className="whatsapp-btn"
            />
            <a href="tel:+00000000" className="call-btn">
              <i className="fas fa-phone"></i> Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}