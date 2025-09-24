import { Link } from "react-router-dom";
import "./PropertyCard.css"; // import your CSS for cards

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      {/* 👇 Wrap image inside Link */}
      <Link to={`/property/${property._id}`}>
        <img
          src={property.primaryImage}
          alt={property.title}
          className="property-thumb"
          style={{ cursor: "pointer" }}
        />
      </Link>

      <h3>{property.title}</h3>
      <p>₹{property.price?.toLocaleString()}</p>

      {/* View Details button (kept for clarity) */}
      <Link to={`/property/${property._id}`} className="details-btn">
        View Details
      </Link>
    </div>
  );
}

export default PropertyCard;
