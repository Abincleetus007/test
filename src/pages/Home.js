// src/pages/Home.js
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import propertiesData from "../data/properties";
import "./Home.css";
import Footer from "../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  const filteredProperties = properties.filter((property) => {
    const query = searchQuery.toLowerCase();
    return (
      property.title.toLowerCase().includes(query) ||
      property.bedrooms.toString().includes(query)
    );
  });

  const displayedProperties = showAll
    ? filteredProperties
    : filteredProperties.slice(0, 10);

  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home-page">
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by number of bedrooms or title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Inspiration for Your Next Project</h2>

        <div className="scroll-container">
          <button className="arrow-btn left" onClick={() => scroll("left")}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="gallery-grid horizontal" ref={scrollRef}>
            {displayedProperties.length > 0 ? (
              displayedProperties.map((property) => (
                <div
                  key={property._id}
                  className="gallery-card"
                  onClick={() => handlePropertyClick(property._id)}
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

          <button className="arrow-btn right" onClick={() => scroll("right")}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* View More / View All Projects */}
        <div className="view-more-container">
          {!showAll && filteredProperties.length > 10 && (
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
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
