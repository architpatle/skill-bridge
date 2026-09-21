import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import heroData from '../data/heroData'
import ContactForm from '../components/contact/ContactForm/ContactForm'
import OurVision from '../components/about/OurVision/OurVision'

const Contact = () => {
  return (
    <>
      <Hero data={heroData.contact} />
      <ContactForm />
      <OurVision />
    </>
  )
}

export default Contact
