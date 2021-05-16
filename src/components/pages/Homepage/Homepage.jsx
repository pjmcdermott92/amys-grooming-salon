import React from 'react'
import About from './components/About/About'
import CtaSection from './components/CtaSection/CtaSection'
import Hero from './components/Hero/Hero'
import ServicesSection from './components/ServicesSection/ServicesSection'
import Testimonials from './components/Testimonials/Testimonials'

const Homepage = () => {
    return (
        <>
          <Hero />
          <About />
          <ServicesSection />
          <CtaSection />
          <Testimonials />
        </>
    )
}

export default Homepage
