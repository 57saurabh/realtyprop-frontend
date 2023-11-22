// components/Offers.js
import React from 'react';
import './Offers.css';
import { FaHome, FaBuilding, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Offers() {
  return (
    <section className='offers'>
      <h2>What RealtyProp.in Offers</h2>
      <div className="maincontainer">

      <div className='colomn'>
        <FaBuilding className='offer-icon' size={40} />
        <div>
          <h3>Buy</h3>
          <p>Find your dream home from our extensive list of properties for sale. We provide detailed information to help you make the best decision.</p>
          <div className="btn-center">
          <Link to="/buy" className="view-more-button">View More</Link>
          </div>
        </div>

        {/* Add more details or a link to the buy section */}
      </div>
      <div className='colomn'>
        <FaHome className='offer-icon'  size={40} />
        <div>
          <h3>Rental</h3>
          <p>Looking for a place to rent? We have a wide range of rental properties to suit all budgets and needs.</p>
          <div className="btn-center">
          <Link to='/rentals' className="view-more-button">View More</Link>
          </div>
        </div>
        {/* Add more details or a link to the rental section */}
      </div>
      <div className='colomn'>
        <FaTools className='offer-icon'  size={40}  />
        <div>
          <h3>Home Solutions</h3>
          <p>From home loans to home shifting services, we offer comprehensive solutions to make your home buying process as smooth as possible.</p>
          <div className="btn-center">
          <Link to='/homesolution' className="view-more-button">View More</Link>
          </div>
        </div>
        {/* Add more details or a link to the home solutions section */}
      </div>
      </div>
    </section>
  );
}

export default Offers;
