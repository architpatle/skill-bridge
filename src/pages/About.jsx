import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import heroData from '../data/heroData'

const About = () => {
  return (
    <>
      <Hero data ={heroData.about} />
    </>
  )
}

export default About
