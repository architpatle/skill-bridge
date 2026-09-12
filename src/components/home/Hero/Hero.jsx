import React from 'react'
import styles from './Hero.module.css'
import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import Button from '../../ui/Button/Button'


const Hero = () => {
  return (
    <section className={`${styles.hero} section-lg `}>

      <div className={`${styles.contentWrapper} `}>

        {/* Eyebrow  */}
        <Eyebrow eyebrowSub="Discover" eyebrowMain=" your career readiness" />

        {/* main heading */}
        <h1 className={`${styles.mainHeading} `} >Bridge your skills to your dream career</h1>

        {/* description */}
        <p className={`${styles.description} `} >Analyze your skills, discover gaps, and get a personalized roadmap to become job-ready.</p>

        {/* CTA */}
        <div className={`${styles.ctaWrapper} `}>
          <Button value="Get Started" />
          <Button value="Get In Touch" variant="secondary" />

        </div>

      </div>

    </section>
  )
}

export default Hero
