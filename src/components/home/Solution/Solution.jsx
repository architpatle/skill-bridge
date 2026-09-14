import React from 'react'
import styles from './Solution.module.css'
import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import {
    RiUserStarLine,
    RiBriefcase4Line,
    RiSearchEyeLine,
    RiPulseLine,
    RiRouteLine
} from "react-icons/ri";
import solutionImg from '../../../assets/images/home/solution.png'

const CoreFlowData = [
    {
        id: '1',
        icon: RiUserStarLine,
        heading: 'Your Skills',
        description: 'Understand your current strengths, skills, and experience to build a clear picture of where you stand today.',
    },
    {
        id: '2',
        icon: RiBriefcase4Line,
        heading: 'Role Requirements',
        description: 'See what skills and capabilities employers expect from candidates in your target role.',
    },
    {
        id: '3',
        icon: RiSearchEyeLine,
        heading: 'Skill Gaps',
        description: 'Identify the key skills you’re missing or need to improve to become a stronger candidate.',
    },
    {
        id: '4',
        icon: RiPulseLine,
        heading: 'Readiness',
        description: 'Measure how well your current skill set aligns with the requirements of your target role.',
    },
    {
        id: '5',
        icon: RiRouteLine,
        heading: 'Learning Roadmap',
        description: 'Get a personalized path that tells you what to learn next and how to close your most important skill gaps.',
    },
]

const CoreFlow = ({ icon: Icon, heading, description }) => {
    return (
        <div className={`${styles.coreFlow}`}>
            {/* icon */}
            <div className={`${styles.iconWrapExtra} iconWrap2`}>
                {Icon && <Icon className={`${styles.iconExtra} icon2`} />}
            </div>

            {/* content */}
            <div className={`${styles.contentWrapper}`}>
                <h3 className={`${styles.cardHeadingExtra} cardHeading`}>{heading}</h3>
                <p className='description'>{description}
                </p>
            </div>
        </div>
    )
}

const Solution = () => {
    return (
        <section className={`${styles.solution} section-sm `}>

            <div className={`${styles.row} container`}>


                {/* column left */}
                <div className={`${styles.colLeft}  `}>
                    {/* <div className="colLeftTop">
                        <h2>Core Flow</h2>
                    </div> */}

                    <div className={`${styles.image}  `}>
                        <img src={solutionImg} alt="solutionImg" />
                    </div>

                </div>

                {/* column right */}
                <div className={`${styles.colRight}  `}>

                    <div className="colRightTop">

                        {/* Eyebrow  */}
                        <Eyebrow eyebrowSub="Solution" eyebrowMain="provided by SkillBridge" />

                        {/* main heading */}
                        <h2 className={`${styles.headingExtra}  heading`} >Know exactly what it takes to become job-ready.</h2>

                    </div>

                    {/* Core Flow */}
                    <div className={`${styles.coreFlowWrapper} `}>
                        {CoreFlowData.map((coreFlow) => (
                            <CoreFlow icon={coreFlow.icon} heading={coreFlow.heading} description={coreFlow.description} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}


export default Solution
