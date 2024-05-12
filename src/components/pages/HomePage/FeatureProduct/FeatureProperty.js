// PropertyListings.js
import React, { useEffect, useState } from 'react';
import './PropertyListings.css';
import img1 from '../../../utils/asset/pexels-expect-best-323705.jpg'
import img2 from '../../../utils/asset/pexels-jovydas-dobilas-2957862.jpg'
import img3 from '../../../utils/asset/pexels-ricky-esquivel-2576111.jpg'
import img4 from '../../../utils/asset/pexels-trace-hudson-2516417.jpg'
import Propertycard from '../../cards/PropertyCard/Propertycard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../../utils/loader/Loader';


const PropertyListings = () => {
  const [listings, setListing] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchlist = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://realtyprop-backend-production-d2c6.up.railway.app/property', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setListing(response.data);
        // console.log(listings)
      } catch (error) {
        console.error('Failed to fetch queries:', error);
      } finally{
        setLoading(false)
      }
    };

    fetchlist();
  }, []);



  return (
    <div className="property-listings">
        <div className="propertyheading">
      <h2 className=''>Discover Homes with Us</h2>
    <p>Dive deep into our extensive listings of homes for sale, explore original neighborhood photos, read through resident reviews, and gain local insights to find the home that's perfectly suited for you.</p>
        </div>
        {
          loading? <Loader/>:(

          
      <div className="listings-container">
        {listings.filter(property => property.featured === true).map((property) => (
          <Propertycard property={property}/>
        ))}
      </div>
      )
    }
      <div className="view-more-end">
            <Link to="/all-properties">View More</Link>
      </div>
    </div>
  );
};

export default PropertyListings;
