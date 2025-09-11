import { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import propertiesData from "../data/properties"; // 👈 import local data
import './Home.css';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simulate API call
    setProperties(propertiesData);
  }, []);

  return (
    <div className="home-container">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
}
