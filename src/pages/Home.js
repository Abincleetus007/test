// src/pages/Home.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import PropertyCard from "../components/PropertyCard";
import propertiesData from "../data/properties"; 
import "./Home.css";
import Footer from "../components/footer";


export default function Home() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load local properties data
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

  // Navigate to property detail
  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

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
          {!showAll && filteredProperties.length > 6 && (
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
      {/* Footer */}
<footer className="footer"> <Footer />
 </footer>
    </div>
  );
}
