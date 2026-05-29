import React from 'react'
import Carousol from '../components/Carousol'
import DownloadsSection from '../components/DownloadsSection'
import StatsSection from '../components/StatsSection'
import AcademicCalendarSection from '../components/AcademicCalendarSection'
import LeadershipProfiles from '../components/LeadershipProfiles'
import ResearchJournals from '../components/ResearchJournals'
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
      
      {/* Statistics At A Glance */}
      <StatsSection />
      
      {/* Academic Calendar */}
      <AcademicCalendarSection />
      
      {/* Leadership & Management Profiles */}
      <LeadershipProfiles />
      
      {/* Research & Journals */}
      <ResearchJournals />
      
      {/* Hero Section - Leadership Cards, Portal Access, and Explore Cards */}
      <Hero />
    </>
  )
}

export default HomeScreen
