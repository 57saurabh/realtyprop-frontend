import React, { useEffect } from 'react'
import './allproduct.css'
import Search from '../../utils/Search/Search'
import dummyProperties from '../../utils/data/dummydata';
import { useState } from 'react';   
import PropertyList from './PropertyList/PropertyList';
import axios from 'axios';
import Loader from '../../utils/loader/Loader';


function LandProperty() {
  const [loading, setLoading] = useState(false)
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

    useEffect(() => {
      const fetchProperties = async () => {
        try {
          setLoading(true)
          const response = await axios.get('https://realtyprop-backend-production.up.railway.app/property');
          const landProperties = response.data.filter(property => property.type === 'land');
          setProperties(landProperties);
          setFilteredProperties(landProperties);
        } catch (error) {
          console.error('Failed to fetch properties:', error);
        }
        finally {
          setLoading(false)
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


  const handleFilterChange = (e) => {
    setSelectedPropertyType(e.target.value);
    filterProperties(e.target.value);
  };

  const filterProperties = (propertyType) => {
    if (propertyType === 'All') {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(
        (property) => property.type.toLowerCase() === propertyType.toLowerCase()
      );
      setFilteredProperties(filtered);
    }
  };
 
  return (
    <div className='allProuduct'>
        <div className="mainsearch">
      <div className="filterSelect">
        <select value={selectedPropertyType} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="flat">flat</option>
          <option value="plot">Plot</option>
          <option value="penthouse">Penthouse</option>
          {/* Add more options for other property types */}
        </select>
      </div>
        <Search onSearch={handleSearch} />
      </div>
        <div className="allproduct-header">
            <h2>
                Land Properties
            </h2>
        </div>
        {
          loading ? <Loader/>: 
        <PropertyList properties={filteredProperties} />
        }
    </div>
  )
}

export default LandProperty