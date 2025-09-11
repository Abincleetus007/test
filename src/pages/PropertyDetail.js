import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";
import "./PropertyDetail.css";
import propertiesData from "../data/properties"; // 👈 keep your data separate

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

        {/* Fullscreen */}
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
              alt="fullscreen"
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
            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        )}

        {/* Title + Price */}
        <div className="property-header">
          <h1>{property.title}</h1>
          <div className="price">₹{property.price?.toLocaleString()}</div>
        </div>

        {/* Stats */}
        <div className="property-stats">
          <div className="stat-item">🛏 {property.bedrooms} Bedrooms</div>
          <div className="stat-item">🛁 {property.bathrooms} Bathrooms</div>
          <div className="stat-item">📐 {property.sqft?.toLocaleString()} sqft</div>
        </div>

        <hr className="divider" />

        {/* Description */}
        <h2 className="section-title">Description</h2>
        <p className="description">{property.description}</p>

        {/* Actions */}
<div className="description-actions">
  {property.video && (
    <div className="video-wrapper">
      {/* If the video is a YouTube link */}
      {property.video.includes("youtube.com") || property.video.includes("youtu.be") ? (
        <iframe
          width="100%"
          height="315"
          src={
            property.video.includes("watch?v=")
              ? property.video.replace("watch?v=", "embed/")
              : property.video.replace("youtu.be/", "www.youtube.com/embed/")
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        // Otherwise treat it as local mp4 file
        <video controls width="100%">
          <source src={property.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )}

  {property.locationLink && (
    <a
      href={property.locationLink}
      target="_blank"
      rel="noopener noreferrer"
      className="action-link"
    >
      📍 View Location
    </a>
  )}
</div>


      </div>

      {/* Right Side - Contact Agent */}
      <div className="agent-contact">
        <div className="contact-actions">
          <WhatsAppButton
            message={`Hi, I would like to make an enquiry`}
            className="whatsapp-btn"
          />
          <a href={`tel:+1234567890`} className="call-btn">
            📞 Call Now
          </a>
        </div>

        <div className="listing-info">
          <div>
            📅 Listed on{" "}
            {new Date(property.createdAt || Date.now()).toLocaleDateString()}
          </div>
          <div>⚡ Response time: Within 1 hour</div>
        </div>
      </div>
    </div>
  );
}
