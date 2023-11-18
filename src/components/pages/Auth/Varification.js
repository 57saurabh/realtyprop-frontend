import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../utils/loader/Loader';
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidErrorCircle } from "react-icons/bi";

const Verification = () => {
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('Verifying Email...');
  const [check,setcheck] = useState(false);
  const [loading,setLoading]= useState(false);
     
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        setLoading(true)
        const response = await axios.post('https://realtyprop-backend-production.up.railway.app/auth/verify-email', { token });
        // Handle successful email verification
        console.log('Email verified:', response.data);
        if (response.data) {
          setcheck(true);
        }
        setVerificationStatus('Email verification successful!');
        // Redirect to a page indicating successful verification
      } catch (error) {
        // Handle verification error
        console.error('Verification error:', error);
        setVerificationStatus('Email verification failed. Please try again.');
        // Redirect to a page indicating verification failure
      }
      finally{
        setLoading(false)
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
     {
       loading?
       <Loader/>:(
          check?
         < FaCheckCircle      style={{fontSize:'80px', color:'green'}} />
         :<BiSolidErrorCircle style={{fontSize:'80px', color:'red'}} />
       )
      }
      <h2>{verificationStatus}</h2> 
    </div>
  );
};

export default Verification;
