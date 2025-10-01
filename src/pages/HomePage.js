// src/pages/HomePage.jsx
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BeforeAfterSlider from "../pages/BeforeAfterSlider";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Testimonials
import TestimonialPage from "../data/Testimonial"; // Component that uses src/data/Testimonial.js
import propertiesData from "../data/properties"; // gallery data

const heroImages = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
];

const serviceBlocks = [
  {
    title: "Construction & Contracting",
    description:
      "If you are looking for a quality construction in lighting speed, we are available for you. Our team of experienced professionals ensures that your projects are completed on time and at a high standard without compromising material and labour quality. Our real-time project tracking allows you to monitor the progress of your project on a daily basis. Additionally, our dedicated relationship manager is always available to assist you.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Architectural Design & Construction",
    description:
      "We take the time to completely understand your requirements and narrow down the project’s style and aesthetics to match your dream. Following the consultations, 2D and 3D floor plans, as well as other detailed drawings, will be created for your project, making it easier to grasp the size and layout of a space. As our designs cover all elements such as windows, doors, flooring, and fixed installations such as bathroom and kitchen fittings, they will provide you with in-depth understanding. In addition, we provide you with a magnificent 3D rendering of your floor plan layout. With an imagination in motion, our customised walkthrough animation will show you the minute aspects of your dream project.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Interior Design & Consultation",
    description:
      "Being in the game for the last 8 years, we provide premium interior designing and consultation services all over the state of Kerala. Your flat, villa, detached house, or business space can be transformed into a beautiful living environment with a new, fresh atmosphere in which to enjoy living and working. Our talented designers will create magnificent designs for your space that mix aesthetic luxuries with functional requirements while staying within budget.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Navigate to property detail
  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  // Auto change hero image every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show first 5 gallery images unless "View More"
  const displayedProperties = showAll
    ? propertiesData
    : propertiesData.slice(0, 5);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        id="home"
        className="hero-section"
        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
      >
        <div className="hero-content">
          <h1>THE BUILDER</h1>
          <p>ARCHITECTS | INTERIOR | CONSTRUCTION & CONTRACTING</p>
          <button className="hero-btn" onClick={() => navigate("/projects")}>
            Explore Our Works
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h1>ABOUT US</h1>
            <h2>Professional Construction & Interior Designing Company</h2>
            <p>
              Crystal Constructions is committed to your comfort from start to finish. 
              From the time you walk through our doors, our family takes care of your 
              family. That is our Philosophy.
            </p>
            <p>
              We are committed to building innovative, high-quality, functional, 
              sustainable, and value-for-money homes backed by superior architecture, 
              technology, and prompt delivery.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Years In Business</p>
              </div>
              <div className="stat-item">
                <h3>250+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>270+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>150+</h3>
                <p>Trained Staff</p>
              </div>
            </div>
          </div>
          <div className="about-images">
            <div className="image-box">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Villa exterior"
                className="about-img"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
     {/* Gallery Section */}
<section className="gallery-section">
  <h2>Inspiration for Your Next Project</h2>
  <div className="gallery-grid">
    {displayedProperties.length > 0 ? (
      displayedProperties.map((property) => (
        <div
          key={property._id}
          className="gallery-card"
          onClick={() => handlePropertyClick(property._id)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={property.primaryImage || property.images?.[0]}
            alt={property.title}
          />
          <div className="gallery-overlay"></div>
        </div>
      ))
    ) : (
      <p>No properties found.</p>
    )}
  </div>

  {/* View More Button */}
  <div className="view-more-container">
    {!showAll && displayedProperties.length < propertiesData.length && (
      <button className="btn-view-more" onClick={() => setShowAll(true)}>
        View More
      </button>
    )}
    {showAll && (
      <button className="btn-view-more" onClick={() => navigate("/projects")}>
        View All Projects
      </button>
    )}
  </div>
</section>


      {/* Before & After Slider Section */}
      <BeforeAfterSlider />

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-container">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Professional construction and design solutions for all your needs
          </p>

          <div className="detailed-services">
            {serviceBlocks.map((svc, idx) => (
              <div className={`service-block ${idx % 2 === 0 ? "" : "reverse"}`} key={idx}>
                <div className="service-text">
                  <h2>{svc.title}</h2>
                  <p>{svc.description}</p>
                </div>
                <div className="service-image">
                  <img src={svc.image} alt={svc.title} />
                </div>
              </div>
            ))}
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>Construction</h3>
              <p>High-quality construction services with attention to detail and timely delivery.</p>
            </div>
            <div className="service-card">
              <h3>Interior Design</h3>
              <p>Transform your spaces into elegant, functional, and modern interiors.</p>
            </div>
            <div className="service-card">
              <h3>Architecture</h3>
              <p>Innovative architectural designs that blend aesthetics with functionality.</p>
            </div>
            <div className="service-card">
              <h3>Consultation</h3>
              <p>Expert consultation to help you plan and execute your dream projects.</p>
            </div>
            <div className="service-card">
              <h3>Project Management</h3>
              <p>End-to-end project management ensuring quality, safety, and efficiency.</p>
            </div>
            <div className="service-card">
              <h3>Renovation</h3>
              <p>Modernize and upgrade existing spaces with creative renovation solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-images">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
              alt="Contact image 1"
              className="contact-img img1"
            />
          </div>
          <div className="contact-text">
            <h2>CONTACT US</h2>
            <p>
              Reach out to us for consultations, project inquiries, or any questions 
              about our construction and design services.
            </p>
            <div className="contact-info">
              <p><FontAwesomeIcon icon={faPhone} /> +91 00000000</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> info@builder.com</p>
            </div>

            <div className="contact-logos">
              <button
                className="contact-logo-btn"
                onClick={() => window.open("https://wa.me/7012599817", "_blank")}
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </button>
              <button
                className="contact-logo-btn"
                onClick={() => window.open("tel:+9100000000")}
              >
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </button>
              <button
                className="contact-logo-btn"
                onClick={() => window.open("https://maps.app.goo.gl/ok4yFCoJVBcfsZir7")}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="testimonial-section">
        <TestimonialPage />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top container">
          <div className="footer-col about">
            <h3>The Builder</h3>
            <p>Professional Construction & Interior Designing Company</p>
            <p>Address: Your full address here</p>
            <p>Phone: +91 00000000 | Email: info@builder.com</p>
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
          <p>© {new Date().getFullYear()} The Builder. All rights reserved.</p>
          <p>Designed by YourName / Your Company</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
