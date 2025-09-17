import { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import propertiesData from "../data/properties"; // your local data
import "./Home.css";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulate API call
    setProperties(propertiesData);
  }, []);

  // Filter by title OR number of bedrooms
  const filteredProperties = properties.filter((property) => {
    const query = searchQuery.toLowerCase();

    return (
      property.title.toLowerCase().includes(query) ||
      property.bedrooms.toString().includes(query) // check bedrooms
    );
  });

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
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
}
