import React from 'react'

import Hero from '../components/sections/Hero/Hero'
import Gap from '../components/home/Gap/Gap'
import Solution from '../components/home/Solution/Solution'
import HowItWorks from '../components/home/HowItWorks/HowItWorks'
import Features from '../components/home/Features/Features'
import ProductPreview from '../components/home/ProductPreview/ProductPreview'
import CTA from '../components/home/CTA/CTA'

import heroData from '../data/heroData'

const Home = () => {
  return (
    <>
      <Hero data={heroData.home} />
      <Gap />
      <Solution />
      <HowItWorks />
      <Features />
      <ProductPreview />
      <CTA />
    </>
  )
}

export default Home
