import Hero from '../components/sections/Hero/Hero'
import heroData from '../data/heroData'
import Why from '../components/about/Why/Why'
import How from '../components/about/How/How'
import OurVision from '../components/about/OurVision/OurVision'

const About = () => {
  return (
    <>
      <Hero data ={heroData.about} />
      <Why />
      <How />
      <OurVision />
    </>
  )
}

export default About
