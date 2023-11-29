import React, { useEffect } from 'react'
import './category.css'
import { useParams, useNavigate } from 'react-router-dom';
import Search from '../../../utils/Search/Search'
import dummyProperties from '../../../utils/data/dummydata';
import { useState } from 'react';   
import PropertyList from '../../AllProductPage/PropertyList/PropertyList';
import axios from 'axios';
import Loader from '../../../utils/loader/Loader';


function CatogaryList() {
  const params = useParams();

  const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState(dummyProperties);
    const [loading,setLoading] = useState(false);


    useEffect(() => {
      const fetchProperties = async () => {
        try {
          setLoading(true)
          const response = await axios.get('https://realtyprop-backend-production.up.railway.app/property');
          const rentalProperties = response.data.filter(property => property.type ===params.id );
          setProperties(rentalProperties);
          setFilteredProperties(rentalProperties);
        } catch (error) {
          console.error('Failed to fetch properties:', error);
        }
        finally{
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

  const capitalizeAndPluralize = (word) => {
    // Capitalize first letter
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  
    // Add 's' at the end
    const pluralized = capitalized + 's';
  
    return pluralized;
  };
  
  // Usage
  const capitalizedWord = capitalizeAndPluralize(params.id);

  return (
    <div className='allProuduct'>
        <div className="mainsearch">
        <Search onSearch={handleSearch} />
        </div>
        <div className="allproduct-header">
            <h2>
                {capitalizedWord}
            </h2>
        </div>
        {
          loading ? <Loader/> : <PropertyList properties={filteredProperties} />
        }
    </div>
  )
}

export default CatogaryList