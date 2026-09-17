import React from 'react'
import Hero from '../components/home/Hero/Hero'
import Gap from '../components/home/Gap/Gap'
import Solution from '../components/home/Solution/Solution'
import HowItWorks from '../components/home/HowItWorks/HowItWorks'
import Features from '../components/home/Features/Features'
import ProductPreview from '../components/home/ProductPreview/ProductPreview'
import CTA from '../components/home/CTA/CTA'

const Home = () => {
  return (
    <>
      <Hero />
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
