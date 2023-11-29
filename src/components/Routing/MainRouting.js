import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import ProductDetailCard from '../pages/cards/PropertyDetailsCard/PropertyDetailCard';
import Navbar from '../NavBar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import Footer from '../Footer/Footer';
import AllProduct from '../pages/AllProductPage/AllProduct';
import BuyProperty from '../pages/AllProductPage/BuyProperty';
import Apartments from '../pages/AllProductPage/Apartments';
import ContactUs from '../pages/contactUs/ContactUs';
import Rentals from '../pages/AllProductPage/Rentals';
import CatogaryList from '../pages/HomePage/Catogary/CatogaryList';
import PublicRoutes from './PublicRoutes';
import { useState } from 'react';
import HomeSolution from '../pages/HomeSolution/HomeSolution';
import Verification from '../pages/Auth/Varification';
import axios from 'axios';
import UserContext from '../../Context/UserContext';
import Layout from './Layout';
import Termcondition from '../Footer/termscondition/Termcondition';
import PrivacyPolicy from '../Footer/privacypolicy/PrivacyPolicy';
import ScrollToTop from './ScrollToTop';



function MainRouting() {
  const { login } = useContext(UserContext);
  // const [loding , setLoding]= useState(true);
  // const navigate = useNavigate();
  
  const validateToken = async()=>{
    try {
      const response = await axios.post("https://realtyprop-backend-production.up.railway.app/auth/get-user-by-id",{},{
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('token')}`
        }
      })
      if(response.data.success){
        login(response.data.data)
        // setLoding(false)
      }else{
        localStorage.removeItem('token');
        alert(response.data.message);
        // setLoding(false)
        // navigate("/login")
      }
    } catch (error) {
        localStorage.removeItem('token');
        alert(error.message);
      // setLoding(false)
        // navigate("/login")
    }
  }
  useEffect(()=>{
    if (localStorage.getItem("token")) {
      validateToken()
      
    }
  },[])




  

    
  return (
    <Router>
      <ScrollToTop/>
        <Navbar/>
      <Routes>
          <Route path="/" element={
            <Layout>
          <HomePage />
            </Layout>
        } /> 
        <Route path="/product/detail/:id" element={
          <Layout>
        <ProductDetailCard />
          </Layout>
      } />
        <Route path="/buy" element={
          <Layout>
        <BuyProperty />
          </Layout>
      } />
        <Route path='/category/:id' element={
          <Layout>
        <CatogaryList/>
          </Layout>
      }/>
        <Route path='/rentals' element={
          <Layout>
        <Rentals/>
          </Layout>
      }/>
        <Route path="/all-properties" element={
          <Layout>
        <AllProduct />
          </Layout>
      } />
        <Route path="/signup" element={
          <PublicRoutes>
            <Layout>
        <SignUp />
            </Layout>
          </PublicRoutes>
      } />
      <Route path="/apartments" element={
        <Layout>
      <Apartments  />
        </Layout>
    } /> {/* Added route for Properties */}
      <Route path="/contact" element={
        <Layout>
      <ContactUs  />
        </Layout>
    } />
     {/* Added route for Contact */}
      <Route path="/login" element={
        <PublicRoutes>
          <Layout>
      <Login />
          </Layout>
        </PublicRoutes>
    } />
    <Route path='/homesolution' element={
      <Layout>
        <HomeSolution/>
      </Layout>
    }
    />
    <Route path='/terms-of-service' element={
      <Layout>
        <Termcondition/>
      </Layout>
    }
    />
    <Route path='/privacy-policy' element={
      <Layout>
        <PrivacyPolicy/>
      </Layout>
    }
    />
    {/* Added route for Home Solution*/}
    <Route path="/verify/:token" element={<Verification/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}


export default MainRouting;
