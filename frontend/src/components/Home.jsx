import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './heroSection'
import { CategoryCarousel } from './CategoryCarousel'
import { LatestJobs } from './LatestJobs'
import Footer from './shared/Footer'
function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoryCarousel/>
    <LatestJobs/>
    <Footer/>
    </>
  )
}

export default Home