import React from 'react'
import styles from './Hero.module.css'
import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import Button from '../../ui/Button/Button'


const Hero = () => {
  return (
    <section className={`${styles.hero} section-lg `}>

      <div className={`${styles.contentWrapper} `}>

        {/* Eyebrow  */}
        <Eyebrow eyebrowSub="Saas" eyebrowMain="Powerful Tools, Simple Interface" />

        {/* main heading */}
        <h1 className={`${styles.mainHeading} `} >Turn Data into Business Intelligence.</h1>

        {/* description */}
        <p className={`${styles.description} `} >Simplify the way you work with our powerful task management platform From organizing daily to-dos to managing complex projects.</p>

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
