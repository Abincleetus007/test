import React, { useState, useEffect } from "react";
import "./Testimonial.css"; // styling for testimonial card and stars
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

// Testimonial data inside the component
const testimonialsData = [
  {
    name: "John Doe",
    role: "Homeowner",
    message:
      "The Builder team delivered my dream home on time with amazing quality and attention to detail.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Client",
    message:
      "Professional, creative, and highly responsive. Highly recommend their interior design services!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Robert Brown",
    role: "Investor",
    message:
      "Great experience working with them on our commercial project. Excellent project management and execution.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonialsData[currentIndex];

  // Auto-slide every 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Generate stars
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FontAwesomeIcon
      key={i}
      icon={i < testimonial.rating ? solidStar : regularStar}
      className="testimonial-star"
    />
  ));

  return (
    <div className="testimonial-container">
      <h1 className="testimonials-title">What Our Clients Say</h1>
      <div className="testimonial-card">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="testimonial-avatar"
        />
        <p className="testimonial-message">"{testimonial.message}"</p>
        <div className="testimonial-stars">{stars}</div>
        <h3 className="testimonial-name">{testimonial.name}</h3>
        <p className="testimonial-role">{testimonial.role}</p>
      </div>

      {/* Navigation arrows */}
      <div className="testimonial-controls">
        <button
          onClick={() =>
            setCurrentIndex(
              (currentIndex - 1 + testimonialsData.length) % testimonialsData.length
            )
          }
        >
          &#10094;
        </button>
        <button
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % testimonialsData.length)
          }
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
