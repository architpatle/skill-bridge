import { useState, useEffect } from 'react'

import styles from './How.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import HowCard from './HowCard/HowCard';

import {
    RiUserStarLine,
    RiBriefcase4Line,
    RiSearchEyeLine,
    RiPulseLine,
    RiRouteLine
} from "react-icons/ri";

const howData = [
    {
        id: 1,
        icon: RiUserStarLine,
        heading: 'Your Skills',
        description: 'Understand your current skills, experience, and capabilities to establish a clear starting point.',
    },
    {
        id: 2,
        icon: RiBriefcase4Line,
        heading: 'Target Role',
        description: 'Define the career role you are aiming for and the skills required to succeed in it.',
    },
    {
        id: 3,
        icon: RiSearchEyeLine,
        heading: 'Skill Gap Analysis',
        description: 'Compare your current abilities with role requirements to uncover the skills you need to strengthen.',
    },
    {
        id: 4,
        icon: RiPulseLine,
        heading: 'Readiness Score',
        description: 'Get a clear measure of how closely your current profile aligns with your target role.',
    },
    {
        id: 5,
        icon: RiRouteLine,
        heading: 'Personalized Roadmap',
        description: 'Turn your skill gaps into a focused learning path that guides you toward becoming job-ready.',
    },
]

const How = () => {

    // Carousel Logic [active card track]
    const [activeIndex, setActiveIndex] = useState(0);

    // auto slide logic for carousel
    useEffect(() => {

        const timer = setInterval(() => {
            if (activeIndex < howData.length - 1) {
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
        <section className={`${styles.how} section-sm `}>

            <div className={`${styles.contentWrapper} container `}>

                <div className={`${styles.contentWrapperInner}  `}>

                    <div className={`${styles.carouselSide}  `}>
                        <div className={`${styles.carouselWrapper}  `}>
                            <div style={{ "--activeIndex": activeIndex }} className={`${styles.carouselTrack}  `}>

                                {howData.map((how) => (
                                    <HowCard number={how.id} icon={how.icon} heading={how.heading} description={how.description} />
                                ))}
                            </div>
                        </div>

                        <div className={`${styles.dotsWrapper} `}>
                            {howData.map((how, index) => (
                                <button className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                                    onClick={() => { setActiveIndex(index) }}></button>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.content}  `}>

                        {/* Eyebrow  */}
                        <Eyebrow eyebrowSub="How" eyebrowMain="SkillBridge works?" />

                        <h2 className={`${styles.headingExtra} heading `} >From where you are to where you want to be.</h2>

                        <p className={`${styles.descriptionExtra} description `} >SkillBridge connects your current skills with the requirements of your target role to identify what you already know, what you're missing, and how well your profile aligns with your career goals.
                            <br /> <br />
                            It then turns these insights into a clear, personalized direction, helping you understand what to improve, what to learn, and what steps to focus on next.
                            
                        </p>

                    </div>


                </div>

            </div>
        </section>
    )
}

export default How
