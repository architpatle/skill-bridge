import React from 'react'

import styles from './Hero.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import Button from '../../ui/Button/Button'
import OurVision from '../../../components/about/OurVision/OurVision'
import { Link } from 'react-router-dom'

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

                    {data.primaryBtn && (
                        <Link to="/analyse">
                            <Button value={data.primaryBtn} />
                        </Link>
                    )}

                    {data.secondaryBtn && (
                        <Link to="/contact">
                            <Button value={data.secondaryBtn} variant="secondary" />
                        </Link>

                    )}

                </div>

            </div>

            {/* {data.slider && (<OurVision />)} */}

        </section>
    )
}

export default Hero
