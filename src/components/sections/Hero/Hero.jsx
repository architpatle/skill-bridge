import React from 'react'
import styles from './Hero.module.css'
import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import Button from '../../ui/Button/Button'


const Hero = ({ data }) => {
    return (
        <section className={`${styles.hero} section-lg `}>

            <div className={`${styles.contentWrapper} `}>

                {/* Eyebrow  */}
                <Eyebrow eyebrowSub={data.eyebrowSub} eyebrowMain={data.eyebrowMain} />

                {/* main heading */}
                <h1 className={`${styles.mainHeading} `} >{data.mainHeading}</h1>

                {/* description */}
                <p className={`${styles.description} `} >{data.description}</p>

                {/* CTA */}
                <div className={`${styles.ctaWrapper} `}>

                    {/* Conditional Rendering to display btn only if the btn data is there */}

                    {data.primaryBtn && (<Button value={data.primaryBtn} />)}

                    {data.secondaryBtn && (<Button value={data.secondaryBtn} variant="secondary" />)}

                </div>

            </div>

        </section>
    )
}

export default Hero
