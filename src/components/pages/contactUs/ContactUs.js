import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    qemail: '',
    phoneNo: '',
    userType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.qemail || !formData.phoneNo || !formData.userType || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await axios.post('https://realtyprop-backend-production-d2c6.up.railway.app/queries', formData);
      toast.success('Your message has been sent!');
      resetForm();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error sending message.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      qemail: '',
      phoneNo: '',
      userType: '',
      message: ''
    });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email Address:
          <input type="email" name="qemail" value={formData.qemail} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
        </label>
        <label>
          I am a:
          <select name="userType" value={formData.userType} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Send</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
