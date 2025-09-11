import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        src={property.primaryImage}
        alt={property.title}
        className="property-thumb"
      />
      <h3>{property.title}</h3>
      <p>₹{property.price?.toLocaleString()}</p>
      <Link to={`/property/${property._id}`} className="details-btn">
        View Details
      </Link>
    </div>
  );
}

export default PropertyCard;
