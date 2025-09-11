import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import "./PropertyDetail.css";
import propertiesData from "../data/properties";

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
        {/* Left Side - Property Info */}
        <div className="property-main">
          {/* Slider */}
          <div className="slider">
            <button className="arrow left" onClick={prevImage}>
              &#10094;
            </button>
            <img
              src={images[currentIndex]}
              alt={`${property.title}-${currentIndex}`}
              className="slider-img"
              onClick={() => setFullscreen(true)}
            />
            <button className="arrow right" onClick={nextImage}>
              &#10095;
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

          {/* Stats */}
          <div className="property-stats">
            <div className="stat-item">
              <span className="checkbox"></span> {property.bedrooms} Bedrooms
            </div>
            <div className="stat-item">
              <span className="checkbox"></span> {property.bathrooms} Bathrooms
            </div>
            <div className="stat-item">
              <span className="checkbox"></span>{" "}
              {property.sqft?.toLocaleString()} sqft
            </div>
          </div>

          <hr className="divider" />

          {/* Description */}
          <h2 className="section-title">Description</h2>
          <p className="description">{property.description}</p>

          {/* Actions (Video & Location) */}
          <div className="property-actions">
            {property.videoTourLink && (
              <a
                href={property.videoTourLink}
                target="_blank"
                rel="noreferrer"
                className="action-card"
              >
                <span className="action-icon">▶</span>
                <span className="action-text">Watch Video Tour</span>
              </a>
            )}

            {property.locationLink && (
              <a
                href={property.locationLink}
                target="_blank"
                rel="noreferrer"
                className="action-card"
              >
                <span className="action-icon">📍</span>
                <span className="action-text">View Location</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Side - Contact Agent */}
        <div className="agent-contact agent-offset">

          <div className="agent-info">
            <div className="agent-avatar">BD</div>
            <div className="agent-details">
              <div className="agent-name">BuilderDash Agent</div>
              <div className="agent-role">Property Specialist</div>
            </div>
          </div>

          <div className="contact-actions">
            <WhatsAppButton
              message={`Hi, I'm interested in the property at ${property.title}`}
              className="whatsapp-btn"
            />
            <a href={`tel:+1234567890`} className="call-btn">
              Call Now
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
            &#10094;
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
            &#10095;
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
