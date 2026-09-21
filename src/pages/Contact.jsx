import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import heroData from '../data/heroData'
import ContactForm from '../components/contact/ContactForm/ContactForm'

const Contact = () => {
  return (
    <>
      <Hero data={heroData.contact} />
      <ContactForm />
    </>
  )
}

export default Contact
