import React from 'react'
import { Link } from 'react-router-dom';

import styles from './Footer.module.css'

import {
    RiInstagramLine,
    RiLinkedinFill,
    RiMailLine,
    RiPhoneLine
} from "react-icons/ri";

const Footer = () => {
    return (
        <footer className={`${styles.footer} `}>

            <div className={`${styles.contentWrapper} `}>
                <div className={`${styles.contentWrapperInner} container `}>

                    <div className={`${styles.footerTop} `}>
                        <div className={`${styles.col1} `}>

                            {/* Logo */}
                            <div className={`${styles.logo} `}>
                                Skill<span>Bridge</span>
                            </div>

                            <p  className={`${styles.descriptionExtra} description `} >Analyze your skills, discover gaps, and get a personalized roadmap.</p>

                            <div className={`${styles.social} `}>
                                <div className={`${styles.iconWrapExtra} iconWrap`}>
                                    <RiLinkedinFill className={`${styles.iconExtra} icon`} />
                                </div>

                                <div className={`${styles.iconWrapExtra} iconWrap`}>
                                    <RiInstagramLine className={`${styles.iconExtra} icon`} />
                                </div>

                            </div>

                        </div>

                        <div className={`${styles.col2} `}>
                            {/* Card Heading */}
                            <h3 className={`${styles.cardHeadingExtra} cardHeading`} >Quick Links</h3>

                            <ul className={`${styles.quickLinks} `}>
                                <li>
                                    <Link className={`${styles.quickLinksItem} `} to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className={`${styles.quickLinksItem} `} to="/about">About</Link>
                                </li>
                                <li>
                                    <Link className={`${styles.quickLinksItem} `} to="/analyse">Analyse</Link>
                                </li>
                                <li>
                                    <Link className={`${styles.quickLinksItem} `} to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles.col3} `}>
                            <h3 className={`${styles.cardHeadingExtra} cardHeading`} >Legal</h3>

                            <ul className={`${styles.quickLinks} `}>
                                <li>
                                    <Link className={`${styles.quickLinksItem} `} to="/">Disclaimer</Link>
                                </li>
                                <li>
                                    <Link className={`${styles.quickLinksItem} `} to="/">Privacy</Link>
                                </li>
                                <li>
                                    <Link className={`${styles.quickLinksItem} `} to="/about">Terms</Link>
                                </li>

                            </ul>
                        </div>

                        <div className={`${styles.col4} `}>
                            <h3 className={`${styles.cardHeadingExtra} cardHeading`} >Connect With Us</h3>

                            <ul className={`${styles.quickLinks} `}>
                                <li>
                                    <Link className={`${styles.quickLinksItem}  ${styles.contactItem} `} to="/"> <RiMailLine className={`${styles.contactIcon} `} /> info@skillbridge.com</Link>
                                </li>
                                <li>
                                    <Link className={`${styles.quickLinksItem} ${styles.contactItem}`} to="/"> <RiPhoneLine className={`${styles.contactIcon} `} />+91 9876545678</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles.footerBottom} `}>

                        © 2026 SkillBridge. All Rights Reserved
                    </div>
                </div>

            </div>


        </footer >

    )
}

export default Footer
