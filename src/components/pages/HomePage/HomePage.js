import React, { useEffect } from 'react'
import HeroSection from './Herosection/HeroSection'
import PropertyListings from './FeatureProduct/FeatureProperty'
import Offers from './Offer/Offers'
import Category from './Catogary/Catogary'
import { useNavigate } from 'react-router-dom'

function HomePage() {

  return (
    <>
    <HeroSection/>
    <Category/>
    <PropertyListings/>
    <Offers/>
    </>
  )
}

export default HomePage