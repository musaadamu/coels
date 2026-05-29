import React from 'react'
import Carousol from '../components/Carousol'
import DownloadsSection from '../components/DownloadsSection'
import Hero from "../components/Hero"

const HomeScreen = () => {
  return (
    <>
      {/* Carousel - Full Width at Top */}
      <div style={{ width: '100%' }}>
        <Carousol />
      </div>
      
      {/* Downloads Section - Immediately Below Carousel */}
      <DownloadsSection />
      
      {/* Hero Section - Leadership Cards, Portal Access, and Explore Cards */}
      <Hero />
    </>
  )
}

export default HomeScreen
