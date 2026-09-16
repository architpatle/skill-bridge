import React from 'react'
import styles from './ProductPreview.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import Button from '../../ui/Button/Button'

import dashboardVideo from '../../../assets/videos/home/dashboard.mp4'
import { RiCheckLine } from "react-icons/ri";

const ProductPreview = () => {
    return (
        <section className={`${styles.productPreview} section-sm `}>
            <div className={`${styles.contentWrapper} container `}>

                <div className={`${styles.contentWrapperInner} `}>
                    <div className={`${styles.headingWrapper}`}>

                        {/* Eyebrow  */}
                        <Eyebrow eyebrowSub="See" eyebrowMain="it in action" />

                        {/* main heading */}
                        <h2 className={`${styles.headingExtra}  heading`} >A clearer picture of where you stand.</h2>

                    </div>

                    <div className={`${styles.dashboardWrapper}`}>
                        <div className={`${styles.dashboardWrapperInner}`}>
                            <div className={`${styles.dashboardVideoWrapper}`}>
                                <video autoPlay muted loop playsInline src={dashboardVideo}></video>
                            </div>

                            {/* <div className={`${styles.dashboardContentWrapper}`}>
                                <div className={`${styles.dashboardHeadingWrapper}`}>

                                    <h2 className={`${styles.headingExtra} heading`} >Key Points heading</h2>

                                    <Button value="Get Started" />

                                </div>


                                <div className={`${styles.keyPointsWrapper}`} >
                                    <ul>
                                        <li>
                                            <div className={`${styles.iconWrapExtra} iconWrap2`}>
                                                <RiCheckLine className={`${styles.iconExtra} icon2`} />
                                            </div>
                                            Job Readiness Score
                                        </li>
                                        <li>
                                            <div className={`${styles.iconWrapExtra} iconWrap2`}>
                                                <RiCheckLine className={`${styles.iconExtra} icon2`} />
                                            </div>
                                            Target Role
                                        </li>
                                        <li>
                                            <div className={`${styles.iconWrapExtra} iconWrap2`}>
                                                <RiCheckLine className={`${styles.iconExtra} icon2`} />
                                            </div>
                                            Skill Match
                                        </li>
                                        <li>
                                            <div className={`${styles.iconWrapExtra} iconWrap2`}>
                                                <RiCheckLine className={`${styles.iconExtra} icon2`} />
                                            </div>
                                            Skill Gaps
                                        </li>
                                        <li>
                                            <div className={`${styles.iconWrapExtra} iconWrap2`}>
                                                <RiCheckLine className={`${styles.iconExtra} icon2`} />
                                            </div>
                                            Learning Roadmap
                                        </li>
                                        <li>
                                            <div className={`${styles.iconWrapExtra} iconWrap2`}>
                                                <RiCheckLine className={`${styles.iconExtra} icon2`} />
                                            </div>
                                            Progress indicators
                                        </li>

                                    </ul>
                                </div>

                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default ProductPreview
