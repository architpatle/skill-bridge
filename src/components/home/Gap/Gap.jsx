import React from 'react'
import styles from './Gap.module.css'
import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import GapCard from './GapCard/GapCard'
import {
    RiCompass3Line,
    RiSearchEyeLine,
    RiRouteLine
} from "react-icons/ri";

const Gap = () => {
    return (
        <section className={`${styles.gap} section-sm `}>

            <div className={`${styles.contentWrapper} container `}>

                {/* Eyebrow  */}
                <Eyebrow eyebrowSub="Why" eyebrowMain="to use SkillBridge?" />

                <div className={`${styles.contentTop}`}>
                    {/* main heading */}
                    <h2 className='heading' >Your degree tells one story. Your skills tell another.</h2>

                    {/* description */}
                    <p className="description" >Employers look for role-ready skills, but most students don't know exactly where they stand—or what they need to improve.</p>
                </div>

                {/* Gap Cards */}
                <div className={`${styles.cardWrap}`}>
                    <GapCard cardHeading="No Clear Direction" cardDescription="Unsure which skills matter for your target role." icon={RiCompass3Line} />

                    <GapCard cardHeading="Hidden Skill Gaps" cardDescription="Don't know what's missing between you and job readiness." icon={RiSearchEyeLine} />

                    <GapCard cardHeading="Scattered Learning" cardDescription="Too many resources, with no clear roadmap." icon={RiRouteLine} />
                </div>
            </div>

        </section>
    )
}

export default Gap
