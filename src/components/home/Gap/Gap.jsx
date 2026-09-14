import React from 'react'
import styles from './Gap.module.css'
import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import GapCard from './GapCard/GapCard'
import {
    RiCompass3Line, RiSearchEyeLine, RiRouteLine
} from "react-icons/ri";

const Cards = [
    {
        id: '1',
        icon: RiCompass3Line,
        cardHeading: 'No Clear Direction',
        cardDescription: 'Unsure which skills matter for your target role.',
    },
    {
        id: '2',
        icon: RiSearchEyeLine,
        cardHeading: 'Hidden Skill Gaps',
        cardDescription: "Don't know what's missing between you and job readiness.",
    },
    {
        id: '3',
        icon: RiRouteLine,
        cardHeading: 'Scattered Learning',
        cardDescription: 'Too many resources, with no clear roadmap.',
    },
];

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
                    {Cards.map((card) => (
                        <GapCard cardHeading={card.cardHeading} cardDescription={card.cardDescription} icon={card.icon} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Gap
