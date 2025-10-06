// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-col about">
          <h3>CRYSTAL BUILDERS</h3>
          <p>Professional Construction & Interior Designing Company</p>
          <p>Address: Your full address here</p>
          <p>Phone: +91 00000000 | Email: info@crystalbuilders.com</p>
        </div>

        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/before-after">Before & After</a></li>
          </ul>
        </div>

        <div className="footer-col social-and-stats">
          <h4>Stay Connected</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>

          <div className="footer-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years In Business</span>
            </div>
            <div className="stat">
              <span className="stat-number">250+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} Crystal Builders. All rights reserved.</p>
        <p>Designed by Crystal Builders</p>
      </div>
    </footer>
  );
};

export default Footer;
