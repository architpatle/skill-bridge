import React, { useState } from 'react'

import styles from './Analysis.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'
import ProfileStage from '../ProfileStage/ProfileStage'
import AnalysisStage from '../AnalysisStage/AnalysisStage'
import ResultsStage from '../ResultsStage/ResultsStage'

const Analysis = () => {
    const [tab, setTab] = useState("ProfileStage");

    const handleClick = (tabActive) => {
        setTab(tabActive);
    }

    return (
        <section className={`${styles.analysis} section-sm `}>
            <div className={`${styles.contentWrapper} container `}>

                <div className={`${styles.headingWrapper}`}>

                    {/* Eyebrow  */}
                    <Eyebrow eyebrowSub="Analyse" eyebrowMain="your career readiness" />

                    {/* main heading */}
                    <h2 className={`${styles.headingExtra}  heading`} >Discover how ready you are for your target role.</h2>

                </div>

                <div className={`${styles.stagesAreaWrapper}`}>

                    {/* Tabs */}
                    <div className={`${styles.tabsWrapper}`}>

                        <div className={`${styles.tabs} ${tab === "ProfileStage" ? styles.tabActive : ' '}`}
                            onClick={() => handleClick("ProfileStage")}
                        >
                            <h4>Profile</h4>
                        </div>

                        <div className={`${styles.tabs} ${tab === "AnalysisStage" ? styles.tabActive : ' '}`}
                            onClick={() => handleClick("AnalysisStage")}
                        >
                            <h4>Analysis</h4>
                        </div>

                        <div className={`${styles.tabs}  ${tab === "ResultsStage" ? styles.tabActive : ' '} `}
                            onClick={() => handleClick("ResultsStage")}
                        >
                            <h4>Results</h4>
                        </div>


                    </div>

                    {/* proccess area */}
                    <div className={`${styles.stageWrapper}`}>

                        {/* conditional rendering of stages */}

                        {tab == "ProfileStage" && <ProfileStage />}

                        {tab == "AnalysisStage" && <AnalysisStage />}

                        {tab == "ResultsStage" && <ResultsStage />}

                    </div>

                </div>
            </div>
        </section>

    )
}

export default Analysis
