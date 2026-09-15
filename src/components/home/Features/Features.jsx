import { useState, useEffect } from 'react'

import styles from './Features.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import FeaturesCard from './FeaturesCard/FeaturesCard'

import img1 from '../../../assets/images/home/detailedSkillAnalysis.png'
import img2 from '../../../assets/images/home/jobReadinessScore.png'
import img3 from '../../../assets/images/home/personalizedLearningRoadmap.png'
import img4 from '../../../assets/images/home/trackYourProgress.png'


const FeaturesData = [
    {
        id: 1,
        img: img1,
        heading: 'Detailed Skill Analysis',
        description: 'Get a comprehensive analysis of your skills, experience, and profile to understand where you stand and how you compare to your target role.',
    },
    {
        id: 2,
        img: img2,
        heading: 'Job Readiness Score',
        description: 'See how closely your current skills match your target role with a clear readiness score and meaningful insights into your strengths and gaps.',
    },
    {
        id: 3,
        img: img3,
        heading: 'Personalized Learning Roadmap',
        description: 'Get a step-by-step learning path tailored to your skill gaps, helping you focus on what to learn next and in what order.',
    },
    {
        id: 4,
        img: img4,
        heading: 'Track Your Progress',
        description: 'Monitor your learning progress, see how your skills improve over time, and stay focused as you work toward becoming job-ready.',
    },
]

const Features = () => {
    // Carousel Logic [active card track]
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            if (activeIndex < FeaturesData.length - 1) {
                setActiveIndex(activeIndex + 1);
            } else {
                setActiveIndex(0);
            }
        }, 4000);

        return () => {
            clearInterval(timer);
        };

    }, [activeIndex])

    return (
        <section className={`${styles.features} section-sm `}>
            <div className={`${styles.contentWrapper} container `}>

                <div className={`${styles.headingWrapper}`}>

                    {/* Eyebrow  */}
                    <Eyebrow eyebrowSub="Key" eyebrowMain="Features Provided" />

                    {/* main heading */}
                    <h2 className={`${styles.headingExtra}  heading`} >Turn career uncertainty into clear action.</h2>

                </div>

                <div style={{ "--activeIndex": activeIndex }} className={`${styles.cardsWrapper}`}>
                    {FeaturesData.map((features) => (
                        <FeaturesCard img={features.img} heading={features.heading} description={features.description} />
                    ))}
                </div>

                <div className={`${styles.dotsWrapper} `}>
                    {FeaturesData.map((features, index) => (
                        <button className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                            onClick={() => { setActiveIndex(index) }}></button>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Features
