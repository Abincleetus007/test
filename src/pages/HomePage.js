import "./HomePage.css";
import { useNavigate } from "react-router-dom"; 

// ✅ Import logo images
import whatsappLogo from "../assets/whatsapp.png";
import phoneLogo from "../assets/phone.png";
import mapsLogo from "../assets/maps.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
    

      {/* Hero Section */}
      <section id="home" className="hero-section" data-aos="fade-down">
        <div className="hero-content" >
          <h1>THE BUILDER</h1>
          <p>ARCHITECTS | INTERIOR | CONSTRUCTION & CONTRACTING</p>
          <button
            className="hero-btn"
            onClick={() => navigate("/projects")}
          >
            Explore Our Works
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Images */}
          <div className="about-images">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
              alt="Villa exterior" 
              className="about-img img1"
            />
           
          </div>

          {/* Text */}
          <div className="about-text">
            <h1>ABOUT US</h1>
            <h2>Professional Construction & Interior Designing Company</h2>
            <p>
              CONSTRUCTIONS committed to your comfort from start to finish.
              From the time you walk through our doors, our family takes care
              of your family. That is our Philosophy.
            </p>
            <p>
              We are committed to building high-quality, functional, sustainable,
              and value-for-money homes backed by superior architecture,
              technology, and prompt delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-container">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Professional construction and design solutions for all your needs
          </p>

          <div className="services-grid">
            <div className="service-card">
              <h3>Construction</h3>
              <p>
                High-quality construction services with attention to detail and timely delivery.
              </p>
            </div>
            <div className="service-card">
              <h3>Interior Design</h3>
              <p>
                Transform your spaces into elegant, functional, and modern interiors.
              </p>
            </div>
            <div className="service-card">
              <h3>Architecture</h3>
              <p>
                Innovative architectural designs that blend aesthetics with functionality.
              </p>
            </div>
            <div className="service-card">
              <h3>Consultation</h3>
              <p>
                Expert consultation to help you plan and execute your dream projects.
              </p>
            </div>
            <div className="service-card">
              <h3>Project Management</h3>
              <p>
                End-to-end project management ensuring quality, safety, and efficiency.
              </p>
            </div>
            <div className="service-card">
              <h3>Renovation</h3>
              <p>
                Modernize and upgrade existing spaces with creative renovation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Images */}
          <div className="contact-images">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
              alt="Contact image 1"
              className="contact-img img1"
            />
            
          </div>

          {/* Text */}
          <div className="contact-text">
            <h2>CONTACT US</h2>
            <p>
              Reach out to us for consultations, project inquiries, or any questions 
              about our construction and design services.
            </p>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> +91 00000000</p>
              <p><i className="fas fa-envelope"></i> info@builder.com</p>
            </div>

            {/* Buttons with Logos */}
            <div className="contact-logos">
              <img
                src={whatsappLogo}
                alt="WhatsApp"
                className="contact-logo"
                onClick={() => window.open("https://wa.me/7012599817", "_blank")}
              />
              <img
                src={phoneLogo}
                alt="Call"
                className="contact-logo"
                onClick={() => window.open("tel:+9100000000")}
              />
              <img
                src={mapsLogo}
                alt="Location"
                className="contact-logo"
                onClick={() => window.open("https://maps.app.goo.gl/ok4yFCoJVBcfsZir7")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>cr</h3>
              <p>The Builder</p>
              <p>Professional Construction & Interior Designing Company</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Construction</li>
                <li>Interior Design</li>
                <li>Architecture</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div className="footer-section">
              
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 The Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
