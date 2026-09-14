import React from 'react'
import styles from './HowItWorks.module.css'
import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import {
  RiUserSettingsLine,
  RiBriefcaseLine,
  RiBarChartBoxLine,
  RiRoadMapLine
} from "react-icons/ri";
import HowItWorksCard from './HowItWorksCard/HowItWorksCard';

const processData = [
    {
        id: 1,
        icon: RiUserSettingsLine,
        heading: 'Build Your Profile',
        description: 'Add your skills, experience, education, projects, and career goals.'
    },
     {
        id: 2,
        icon: RiBriefcaseLine,
        heading: 'Choose Your Role',
        description: 'Select the role you’re aiming for so SkillBridge knows what to evaluate you against.'
    }, {
        id: 3,
        icon: RiBarChartBoxLine,
        heading: 'Get Your Analysis',
        description: 'SkillBridge compares your profile with the requirements of your target role and identifies your strengths and gaps.'
    }, {
        id: 4,
        icon: RiRoadMapLine,
        heading: 'Follow Your Roadmap',
        description: 'Get a personalized learning path focused on the skills that will make the biggest difference.'
    },
]

const HowItWorks = () => {
    return (
        <section className={`${styles.howItWorks} section-sm `}>
            <div className={`${styles.contentWrapper} container `}>

                <div className={`${styles.headingWrapper}`}>

                    {/* Eyebrow  */}
                    <Eyebrow eyebrowSub="Your" eyebrowMain="path to readiness" />

                    {/* main heading */}
                    <h2 className={`${styles.headingExtra}  heading`} >Everything you need to move closer to your career goal.</h2>

                </div>

                <div className={`${styles.cardsWrapper}`}>
                    {processData.map((process) => (
                        <HowItWorksCard number={process.id} icon={process.icon} heading={process.heading} description={process.description} />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default HowItWorks
