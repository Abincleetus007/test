import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BeforeAfterSlider from "../pages/BeforeAfterSlider";
import FloatingEnquiry from "../components/FloatingEnquiry";
import Footer from "../components/footer";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Testimonials
import TestimonialPage from "../data/Testimonial";
import propertiesData from "../data/properties";

const heroImages = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
];

const serviceBlocks = [
  {
    title: "Construction & Contracting",
    description:
      "If you are looking for a quality construction in lighting speed, we are available for you. Our team of experienced professionals ensures that your projects are completed on time and at a high standard without compromising material and labour quality. Our real-time project tracking allows you to monitor the progress of your project on a daily basis. Additionally, our dedicated relationship manager is always available to assist you.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Architectural Design & Construction",
    description:
      "We take the time to completely understand your requirements and narrow down the project’s style and aesthetics to match your dream. Following the consultations, 2D and 3D floor plans, as well as other detailed drawings, will be created for your project, making it easier to grasp the size and layout of a space. As our designs cover all elements such as windows, doors, flooring, and fixed installations such as bathroom and kitchen fittings, they will provide you with in-depth understanding. In addition, we provide you with a magnificent 3D rendering of your floor plan layout. With an imagination in motion, our customised walkthrough animation will show you the minute aspects of your dream project.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Interior Design & Consultation",
    description:
      "Being in the game for the last 8 years, we provide premium interior designing and consultation services all over the state of Kerala. Your flat, villa, detached house, or business space can be transformed into a beautiful living environment with a new, fresh atmosphere in which to enjoy living and working. Our talented designers will create magnificent designs for your space that mix aesthetic luxuries with functional requirements while staying within budget.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Scroll to top after navigating to property
  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Auto hero image change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        id="home"
        className="hero-section"
        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
      >
        <div className="hero-content">
          <h1>CRYSTAL BUILDERS</h1>
          <p>ARCHITECTS | INTERIOR | CONSTRUCTION & CONTRACTING</p>
          <button className="hero-btn" onClick={() => navigate("/projects")}>
            Explore Our Works
          </button>
        </div>
      </section>

      <FloatingEnquiry />

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h1>ABOUT US</h1>
            <h2>Professional Construction & Interior Designing Company</h2>
            <p>
              Crystal Builders is committed to your comfort from start to finish.
              From the time you walk through our doors, our family takes care of
              your family.
            </p>
            <p>
              We are committed to building innovative, high-quality, functional,
              sustainable, and value-for-money homes backed by superior
              architecture, technology, and prompt delivery.
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
            </div>
          </div>
          <div className="about-images">
            <div className="image-box">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Villa exterior"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Inspiration for Your Next Project</h2>
        <div className="gallery-wrapper">
          {currentIndex > 0 && (
            <button
              className="gallery-arrow left"
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              &#10094;
            </button>
          )}

          <div className="gallery-grid">
            {propertiesData
              .slice(currentIndex, currentIndex + 4)
              .map((property) => (
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
              ))}
          </div>

          {currentIndex < propertiesData.length - 4 && (
            <button
              className="gallery-arrow right"
              onClick={() => setCurrentIndex(currentIndex + 1)}
            >
              &#10095;
            </button>
          )}
        </div>

        <div className="view-more-container">
          <button
            className="btn-go-projects"
            onClick={() => {
              navigate("/projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            View more
          </button>
        </div>
      </section>

      {/* Before & After Slider */}
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
              <div
                className={`service-block ${idx % 2 === 0 ? "" : "reverse"}`}
                key={idx}
              >
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-images">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
              alt="Contact"
              className="contact-img"
            />
          </div>
          <div className="contact-text">
            <h2>CONTACT US</h2>
            <p>
              Reach out to us for consultations, project inquiries, or any
              questions about our construction and design services.
            </p>
            <div className="contact-info">
              <p>
                <FontAwesomeIcon icon={faPhone} /> +91 00000000
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> info@builder.com
              </p>
            </div>
            <div className="contact-logos">
              <button
                className="contact-logo-btn"
                onClick={() =>
                  window.open("https://wa.me/7012599817", "_blank")
                }
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
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/ok4yFCoJVBcfsZir7",
                    "_blank"
                  )
                }
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="testimonial-section">
        <TestimonialPage />
      </div>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
