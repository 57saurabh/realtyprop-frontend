// PropertyCard.js
import React from 'react';
import './propertycard.css';
import { Link } from 'react-router-dom';

const Propertycard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image-container">
        <img src={property.thumbnail} alt={`Property ${property.title}`} />
      </div>
      <div className="property-details">
        <h2>{property.title}</h2>
        <p className="property-location">{property.location}</p>
        <p className='property-desc'> {property.description.split(" ").slice(0, 10).join(" ")}...</p>
        <p className="property-price">₹ {property.price}</p>
        {/* <div className="property-features">
          {property.features.map((feature, index) => (
            <span key={index} className="feature">
              {feature}
            </span>
          ))}
        </div> */}
        <Link to={`/product/detail/${property._id}`} className="view-details-button">View Details</Link>
      </div>
    </div>
  );
};

export default Propertycard;
