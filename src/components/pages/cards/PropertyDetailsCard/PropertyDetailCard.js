import React, { useContext, useEffect, useState } from 'react';
import './propertydetailcard.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import UserContext from '../../../../Context/UserContext';
import Loader from '../../../utils/loader/Loader';

const ProductDetailCard = () => {
  const params = useParams();
  const {user} = useContext(UserContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [listing, setListing] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    
    const fetchlist = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://realtyprop-backend-production.up.railway.app/property/${params.id}`);
        setListing(response.data);
      } catch (error) {
        console.error('Failed to fetch queries:', error);
      } finally{
        setLoading(false)
      }
    };

    fetchlist();
  }, []);






  if (!listing) {
    return <p>No product details available.</p>;
  }

  


  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % (listing.images?.length || 1));
  };
  
  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + (listing.images?.length || 1)) % (listing.images?.length || 1));
  };
  
  const selectImage = (index) => {
    if(listing.images) {
      setCurrentImageIndex(index);
    }
  };
  

  const phoneNumber = '+917982548409'; // Replace with the recipient's phone number
  const productlink = `https://www.realtyprop.in/product/detail/${params.id}`
  const message = `Hello, I want to know about this Site - ${productlink} `;

  // Encode the phone number and message
const encodedPhoneNumber = encodeURIComponent(phoneNumber);
const encodedMessage = encodeURIComponent(message);

// Create the WhatsApp link
const whatsappLink = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}&text=${encodedMessage}`;


  return (
    <>
    {
      loading?<Loader/>:
    <div className="product-detail-card">
        <div className='image-container'>
      <div className="image-slider">
        <button onClick={prevImage}>{'<'}</button>
        {/* <img src={listing.images[currentImageIndex]} alt={`product image ${currentImageIndex + 1}`} /> */}
        <img src={listing.images?.[currentImageIndex]} alt={`product image ${currentImageIndex + 1}`} />

        <button onClick={nextImage}>{'>'}</button>
      </div>
      <div className="image-thumbnails">
        {listing.images?.map((image, index) => (
          <img
          key={index} 
          src={image} 
          alt={`product thumbnail ${index + 1}`} 
          onClick={() => selectImage(index)}
          className={currentImageIndex === index ? 'selected' : ''} />
          ))}
      </div>
      </div>
      <div className="product-details">
        <h2>{listing.title}</h2>
        <p><strong>Type:</strong> {listing.type}</p>
        <p><strong>Location:</strong> {listing.location}</p>
        <p><strong>Price:</strong>₹ {listing.price}</p>
        {
          listing.type==='plot'?'':(<>
            <p><strong>Bedrooms:</strong> {listing.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {listing.bathrooms}</p>
          </>
          )
        }
        <p><strong>Area:</strong> {listing.squareFootage}</p>
        <p><strong>Description:</strong> {listing.description}</p>
       {
         listing.type==='plot'?'':
        <p><strong>Features:</strong> {listing.features }</p>
       }
         <div className="agent-info">
       {
         user?
         <>
         <h3>Agent Information</h3>
          <p><strong>Name: </strong>Satender Singh</p>
          <p><strong>Phone:</strong> +91 7982548409</p>
          {/* <p><strong>Email:</strong> Agent Email</p> */}
        <div className="product-actions">
          
          <a href="callto:+917982548409" className="buy-now">Call Now! </a>
          <a href={whatsappLink} className="add-to-cart"> whatsApp Now!</a>
        </div>
          </>
        :
        <div className='agentlogin-card'>
            <Link to= '/login'>Want to know the agent details?<br/> Login Now!</Link> 
        </div>
       }
        </div> 
      </div>
    </div>
    }
       </>
  );
};

export default ProductDetailCard;
