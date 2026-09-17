import React from 'react'
import styles from './CTA.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import Button from '../../ui/Button/Button'

const CTA = () => {
    return (
        <section className={`${styles.cta} section-sm `}>
            <div className={`${styles.contentWrapper} container `}>
                <div className={`${styles.contentWrapperInner}  `}>

                    <div className={`${styles.headingWrapper}`}>

                        {/* Eyebrow  */}
                        <Eyebrow eyebrowSub="Ready" eyebrowMain="to begin?" />

                        {/* main heading */}
                        <h2 className={`${styles.headingExtra}  heading`} >Know where you stand. Discover where you can go.</h2>
                    </div>

                    {/* description */}
                    <p className={`${styles.descriptionExtra} description `} >Turn your skills into a clear career direction with personalized insights, actionable recommendations, and a roadmap built around your goals.</p>

                    <Button value="Check My Readiness" variant='tertiary' />

                </div>
            </div>

        </section>

    )
}

export default CTA
