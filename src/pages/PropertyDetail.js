import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

import "./PropertyDetail.css";
import propertiesData from "../data/properties";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faMapMarkerAlt,
  faArrowLeft,
  faArrowRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const foundProperty = propertiesData.find(
      (p) => p._id === id || p.id === id
    );
    if (foundProperty) {
      setProperty(foundProperty);
      setCurrentIndex(0);
    }
  }, [id]);

  // Keyboard support for arrows
  useEffect(() => {
    const handleKey = (e) => {
      if (fullscreen) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") setFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreen, currentIndex, property]);

  if (!property) return <p className="loading">Property not found...</p>;

  const images = property.primaryImage
    ? [property.primaryImage, ...(property.images || [])]
    : property.images || [];

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="detail-container">
      <div className="property-content">
        {/* LEFT COLUMN - Property Info */}
        <div className="property-main">
          {/* Slider */}
          <div className="slider">
            <button className="arrow left" onClick={prevImage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <img
              src={images[currentIndex]}
              alt={`${property.title}-${currentIndex}`}
              className="slider-img"
              onClick={() => setFullscreen(true)}
            />
            <button className="arrow right" onClick={nextImage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>

            {images.length > 1 && (
              <div className="image-counter">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>

          {/* Title + Price */}
          <div className="property-header">
            <h1>{property.title}</h1>
            <div className="price">₹{property.price?.toLocaleString()}</div>
          </div>

          {/* Description */}
          <h2 className="section-title">Description</h2>
          <p className="description">{property.description}</p>

          {/* Stats */}
          <div className="property-stats">
            <div className="stat-item">{property.bedrooms} Bedrooms</div>
            <div className="stat-item">{property.bathrooms} Bathrooms</div>
            <div className="stat-item">{property.sqft?.toLocaleString()} sqft</div>
          </div>

          <hr className="divider" />

          {/* Actions (Video & Location) */}
          <div className="property-actions">
            {property.videoTourLink && (
              <a
                href={property.videoTourLink}
                target="_blank"
                rel="noreferrer"
                className="action-card"
              >
                <FontAwesomeIcon icon={faPlay} className="action-icon" />
                <span>Watch Video Tour</span>
              </a>
            )}

            {property.locationLink && (
              <a
                href={property.locationLink}
                target="_blank"
                rel="noreferrer"
                className="action-card"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="action-icon" />
                <span>View Location</span>
              </a>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          {/* Testimonials */}
          {property.testimonials && property.testimonials.length > 0 ? (
            <div className="property-testimonials">
              <h2 className="section-title">What Our Clients Say</h2>
              <div className="testimonials-grid">
                {property.testimonials.map((t, index) => (
                  <div key={index} className="testimonial-card">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="testimonial-avatar"
                    />
                    <p className="testimonial-message">"{t.message}"</p>
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={i < t.rating ? solidStar : regularStar}
                          className="testimonial-star"
                        />
                      ))}
                    </div>
                    <h3 className="testimonial-name">{t.name}</h3>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="no-testimonials">No testimonials yet for this property.</p>
          )}

          {/* Agent Contact */}
          <div className="agent-contact">
            <div className="agent-info">
              <div className="agent-avatar">BD</div>
              <div className="agent-details">
                <div className="agent-name">BuilderDash</div>
              </div>
            </div>

            <div className="contact-actions">
              <WhatsAppButton
                message={`Hi, I'm interested in the property at ${property.title}`}
                className="whatsapp-btn"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
              </WhatsAppButton>
              <a href={`tel:+1234567890`} className="call-btn">
                <FontAwesomeIcon icon={faPhone} /> Call Now
              </a>
            </div>

            <div className="listing-info">
              <div>
                Listed on{" "}
                {new Date(property.createdAt || Date.now()).toLocaleDateString()}
              </div>
              <div>Response time: Within 1 hour</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {fullscreen && (
        <div className="fullscreen" onClick={() => setFullscreen(false)}>
          <button
            className="arrow left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <img
            src={images[currentIndex]}
            alt={`${property.title}-${currentIndex}`}
            className="fullscreen-img"
          />
          <button
            className="arrow right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          {images.length > 1 && (
            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
