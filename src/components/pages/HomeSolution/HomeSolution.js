import React from 'react';
import './HomeSolution.css';
import loanImage from '../../utils/asset/homesolution/loan.png';
import shiftingImage from '../../utils/asset/homesolution/shifting.png'

const HomeSolution = () => {
    return (
        <div className="homeSolution-container">
        <div className="homeSolution-section">
        <div className="section-content">
          <h2 style={{textAlign:'center'}}>Home Loan Solutions</h2>
            <p>We provide comprehensive home loan solutions. Whether you're a first-time buyer, looking to refinance, or even considering an investment property, we have the right options for you. Our team of experienced professionals will guide you through the process, ensuring you understand every step. We offer competitive rates and flexible terms to fit your individual needs. Let us help you achieve your home ownership goals.</p>
            </div>
        <div className="section-image nomobile">
          <img src={loanImage} alt="Home Loan" />
        </div> {/* <img src={imgSrc} alt={title} /> */}
        </div>
        <div className="homeSolution-section">
        <div className="section-image nomobile">
          <img src={shiftingImage} alt="Home Shifting" />
        </div>        
        <div className="section-content">
          <h2 style={{textAlign:'center'}}>Home Shifting Services</h2>
             <p>Moving to a new home? We understand that shifting can be stressful. That's why we offer reliable and efficient home shifting services to make your move as smooth as possible. Our team of skilled movers will handle your belongings with utmost care. We provide packing, transportation, and unpacking services, ensuring a hassle-free shifting experience. We also offer insurance coverage for your goods during transit. Trust us to make your home shifting a pleasant experience.</p>
             </div>
        </div>
    </div>
    );
};



export default HomeSolution;
