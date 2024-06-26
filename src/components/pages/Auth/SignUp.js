import React, { useState } from 'react';
import './login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loader from '../../utils/loader/Loader';
import {  AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpFormData, setSignUpFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
  
      // Ensure phone is sent as a string
      const formData = {
        name: signUpFormData.name,
        email: signUpFormData.email,
        phoneNo: signUpFormData.phone.toString(),
        password: signUpFormData.password,
      };
  
      const response = await axios.post("https://realtyprop-backend-production-d2c6.up.railway.app/auth/register", formData);
  
      const successMessage = response.data.message || "Sign-up successful!";
      displayToastMessage(successMessage, "success");
      window.alert(successMessage);
  
      // Reset form fields upon successful sign-up
     
    } catch (error) {
      console.error("Sign-up failed:", error);
  
      const errorMessage = error.message || "Sign-up failed. Please try again.";
      displayToastMessage(errorMessage, "error");
    } finally {
      setLoading(false);
      setSignUpFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
      });
  
    }

  };
  

  const displayToastMessage = (message, type) => {
    setSuccess('');
    setError('');

    toast[type](message, {
      position: "bottom-right",
      autoClose: 5000,
    });

    if (type === "success") {
      // Handle navigation on successful sign-up if needed
      // import { navigate } from 'your-router-library';
      
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const sendVerificationEmail = async (email) => {
  //   try {
  //     await axios.post('https://realtyprop-backend-production-d2c6.up.railway.app/auth/send-verification-email', { email });
  //     // Redirect to a page indicating that a verification email has been sent
  //   } catch (error) {
  //     // Handle error in sending verification email
  //     console.error('Error sending verification email:', error);
  //   }
  // };

  return (
    <div className="container-box">
      {loading ? (
        <div style={{ margin: 'auto' }}>
          <Loader />
        </div>
      ) : (
        <div className="form-container">
          <h2>Create your Account</h2>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={signUpFormData.name}
                onChange={(e) => {
                  setSignUpFormData({ ...signUpFormData, name: e.target.value });
                  setErrors({ ...errors, name: '' });
                }}
                required
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={signUpFormData.email}
                onChange={(e) => {
                  setSignUpFormData({ ...signUpFormData, email: e.target.value });
                  setErrors({ ...errors, email: '' });
                }}
                required
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={signUpFormData.phone}
                onChange={(e) => {
                  setSignUpFormData({ ...signUpFormData, phone: e.target.value });
                  setErrors({ ...errors, phone: '' });
                }}
                required
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <div className='password'>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={signUpFormData.password}
                onChange={(e) => {
                  setSignUpFormData({ ...signUpFormData, password: e.target.value });
                  setErrors({ ...errors, password: '' });
                }}
                required
              />
              <span
                className="password-visibility"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? 
                < AiFillEyeInvisible style={{fontSize:'30px',color:'#37B7B5'}}/> :
                 <AiFillEye style={{fontSize:'30px',color:'#37B7B5'}}/>}
              </span>
              {errors.password && <div className="error">{errors.password}</div>}
                </div>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className='notacc'>Have an account?<Link to='/login'>Login</Link></div>

        </div>
        
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SignUp;
