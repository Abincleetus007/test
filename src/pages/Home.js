// src/pages/Home.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import PropertyCard from "../components/PropertyCard";
import propertiesData from "../data/properties"; // your local data
import "./Home.css";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API call
    setProperties(propertiesData);
  }, []);

  // Filter by title OR number of bedrooms
  const filteredProperties = properties.filter((property) => {
    const query = searchQuery.toLowerCase();
    return (
      property.title.toLowerCase().includes(query) ||
      property.bedrooms.toString().includes(query)
    );
  });

  // Navigate to property detail page on image click
  const handleImageClick = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="home-page">
      {/* 🔍 Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search properties by title or number of bedrooms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Property List */}
      <div className="home-container">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property._id} className="property-wrapper">
          
              {/* Property Card */}
              <PropertyCard property={property} />
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
}
