import React, { useEffect } from 'react'
import './allproduct.css'
import Search from '../../utils/Search/Search'
import dummyProperties from '../../utils/data/dummydata';
import { useState } from 'react';   
import PropertyList from './PropertyList/PropertyList';
import axios from 'axios';


function Apartments() {
  const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState(dummyProperties);


    useEffect(() => {
      const fetchProperties = async () => {
        try {
          const response = await axios.get('https://realtyprop-backend-production.up.railway.app/property');
          const sortedProperties = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
          // setProperties(sortedProperties);
          const apartment = sortedProperties.filter(property => property.type === 'Apartment');
          setProperties(apartment);
          setFilteredProperties(apartment);
        } catch (error) {
          console.error('Failed to fetch properties:', error);
        }
      };
  
      fetchProperties();
    }, []);
    

  const handleSearch = (location) => {
    // Filter properties based on the entered location
    const filtered = dummyProperties.filter((property) =>
      property.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredProperties(filtered);
  };
  return (
    <div className='allProuduct'>
        <div className="mainsearch">
        <Search onSearch={handleSearch} />
        </div>
        <div className="allproduct-header">
            <h2>
                Apartments
            </h2>
        </div>
        <PropertyList properties={filteredProperties} />
    </div>
  )
}

export default Apartments