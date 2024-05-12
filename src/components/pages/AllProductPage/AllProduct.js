import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './allproduct.css';
import Search from '../../utils/Search/Search';
import PropertyList from './PropertyList/PropertyList';
import Loader from '../../utils/loader/Loader';
import { useLocation } from 'react-router-dom';

function AllProduct() {
  const [loading, setLoading] =useState(false)
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://realtyprop-backend-production-d2c6.up.railway.app/property');
        const sortedProperties = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setProperties(sortedProperties);
  
        // If searchTerm exists, filter properties based on it
        if (searchTerm) {
          const filtered = response.data.filter((property) =>
            property.location.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredProperties(filtered);
        } else {
          // If searchTerm doesn't exist, display all properties
          setFilteredProperties(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false)
      }
    };
  
    fetchProperties();
  }, [searchTerm]); // Add searchTerm as a dependency
  

 

  const handleSearch = (location) => {
    const filtered = properties.filter((property) =>
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
    <div className='allProduct'>
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
      {
        searchTerm ?<>Searched Location: {searchTerm}</>:''


      }
      
      
      <div className="allproduct-header">
        <h2>All Properties</h2>
      </div>
      {
        loading ? <Loader/> : 
      <PropertyList properties={filteredProperties} />
      }
    </div>
  );
}

export default AllProduct;
