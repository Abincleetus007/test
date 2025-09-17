// src/pages/ServicePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./ServicePage.css";
import propertiesData from "../data/properties"; // import your property data

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

const experienceItems = ["Design Approach", "Innovative Solutions", "Project Management"];

const ServicePage = () => {
  const navigate = useNavigate(); // ✅ define navigate

  return (
    <div className="service-page">
      {/* Header */}
      <section className="service-header">
        <h1>Our Services</h1>
        <p>Trust the Experience</p>
      </section>

      {/* Service Blocks */}
      <section className="services-section">
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
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>25 Years Of Experience In Architecture Industry</h2>
        <div className="experience-grid">
          {experienceItems.map((item, i) => (
            <div className="experience-item" key={i}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section (fetch dynamically from propertiesData) */}
      <section className="gallery-section">
        <h2>Inspiration for Your Next Project</h2>
        <div className="gallery-grid">
          {propertiesData.map((property, i) => (
            <div className="gallery-card" key={i}>
              <img
                src={property.image || property.images?.[0]}
                alt={property.title || `Project ${i + 1}`}
              />
              <div className="gallery-overlay">
              </div>
            </div>
          ))}
        </div>

        {/* ✅ View More button goes to Home.js (/projects) */}
        <div className="view-more-container">
          <button className="btn-view-more" onClick={() => navigate("/projects")}>
            View More
          </button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="contact-info">
          <h3>Address</h3>
          <p>.</p>
          <p>+91 </p>
          <p>+91 </p>
          <p>info@</p>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
