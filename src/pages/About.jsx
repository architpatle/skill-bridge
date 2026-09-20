import React from 'react'
import Hero from '../components/sections/Hero/Hero'
import heroData from '../data/heroData'
import Why from '../components/about/Why/Why'
import How from '../components/about/How/How'

const About = () => {
  return (
    <>
      <Hero data ={heroData.about} />
      <Why />
      <How />
    </>
  )
}

export default About
