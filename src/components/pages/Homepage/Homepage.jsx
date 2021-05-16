import React from 'react';
import {
    Hero,
    About,
    ServicesSection,
    CtaSection,
    Testimonials,
    FindUsSection,
    ContactSection
} from './components'

const Homepage = () => {
    return (
        <>
          <Hero />
          <About />
          <ServicesSection />
          <CtaSection />
          <Testimonials />
          <FindUsSection />
          <ContactSection />
        </>
    )
}

export default Homepage
