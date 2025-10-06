// src/pages/Home.js
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import propertiesData from "../data/properties"; 
import Footer from "../components/footer";
import "./Home.css";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  // Filter properties by title or bedrooms
  const filteredProperties = properties.filter((property) => {
    const query = searchQuery.toLowerCase();
    return (
      property.title.toLowerCase().includes(query) ||
      property.bedrooms.toString().includes(query)
    );
  });

  // Show only first 6 if showAll is false
  const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 6);

  return (
    <div className="home-page">
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by number of bedrooms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Inspiration for Your Next Project</h2>
        <div className="gallery-grid">
          {displayedProperties.length > 0 ? (
            displayedProperties.map((property) => (
              <Link 
                to={`/property/${property._id}`} 
                key={property._id} 
                className="gallery-card-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="gallery-card">
                  <img
                    src={property.primaryImage || property.images?.[0]}
                    alt={property.title}
                  />
                  {/* Optional overlay or caption */}
                  <div className="gallery-overlay"></div>
                </div>
              </Link>
            ))
          ) : (
            <p>No properties found.</p>
          )}
        </div>

        {/* View More Button */}
        <div className="view-more-container">
          {!showAll && filteredProperties.length > 6 && (
            <button className="btn-view-more" onClick={() => setShowAll(true)}>
              View More
            </button>
          )}
          {showAll && (
            <Link to="/projects">
              <button className="btn-view-more">View All Projects</button>
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
