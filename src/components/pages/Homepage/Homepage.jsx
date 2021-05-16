import React from 'react'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import ServicesSection from './components/ServicesSection/ServicesSection'

const Homepage = () => {
    return (
        <>
          <Hero />
          <About />
          <ServicesSection />
        </>
    )
}

export default Homepage
