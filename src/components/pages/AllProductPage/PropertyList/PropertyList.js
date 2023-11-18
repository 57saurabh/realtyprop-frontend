// PropertyList.js
import React  from 'react';
import './PropertyList.css';
import Propertycard from '../../cards/PropertyCard/Propertycard';
import { useState } from 'react';


const PAGE_SIZE = 6; 
const PropertyList = ({ properties }) => {

    const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  // Slice the properties array to get items for the current page
  const displayedProperties = properties.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (

    
    <>
    <div className="property-list">
      {displayedProperties?.map((property, index) => (
        <div key={index}>
          <Propertycard property={property}/>
        </div>
          
          ))}
    </div>
    <div className="pagination">
        {Array.from({ length: Math.ceil(properties.length / PAGE_SIZE) }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
          </>
  );
};

export default PropertyList;
