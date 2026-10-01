import React, { useEffect, useState } from 'react'

import styles from './AnalysisStage.module.css'

import Eyebrow from '../../ui/Eyebrow/Eyebrow'

import visual from '../../../assets/images/about/why.png'

const processingMessages = [
    "> Initializing SkillBridge AI analysis...",
    "✓ Profile data loaded",

    "> Extracting skills and experience...",
    "✓ Relevant skills identified",

    "> Analyzing target role requirements...",
    "✓ Role requirements mapped",

    "> Comparing your skills with role requirements...",
    "✓ Skill alignment evaluated",

    "> Detecting skill gaps...",
    "✓ Priority skill gaps identified",

    "> Assessing your job readiness...",
    "✓ Readiness score calculated",

    "> Prioritizing learning requirements...",
    "✓ Learning priorities determined",

    "> Building your personalized roadmap...",
    "✓ Learning path generated",

    "> Finalizing career readiness insights...",
    "✓ Analysis complete"
];

const AnalysisStage = () => {

    const [completedMessages, setCompletedMessages] = useState([]);
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const currentMessage = processingMessages[messageIndex];
    const displayedMessage = currentMessage?.slice(0, charIndex);

    // Typewriter useEffect
    useEffect(() => {

        if (!currentMessage) return;

        if (currentMessage.startsWith("✓")) {

            // Show the ✓ message immediately
            setCompletedMessages(prev => [
                ...prev,
                currentMessage
            ]);

            // Then wait before moving to the next message
            const timer = setTimeout(() => {
                setMessageIndex(prev => prev + 1);
            }, 700);

            return () => clearTimeout(timer);
        }

        const timer = setInterval(() => {

            setCharIndex(prev => {

                if (prev >= currentMessage.length) {
                    clearInterval(timer);
                    return prev;
                }

                return prev + 1;
            });

        }, 60);

        return () => clearInterval(timer);

    }, [currentMessage]);

    useEffect(() => {

        if (!currentMessage) return;

        if (
            currentMessage.startsWith(">") &&
            charIndex >= currentMessage.length
        ) {

            const timer = setTimeout(() => {

                setCompletedMessages(prev => [
                    ...prev,
                    currentMessage
                ]);

                setCharIndex(0);
                setMessageIndex(prev => prev + 1);

            }, 700);

            return () => clearTimeout(timer);
        }

    }, [charIndex, currentMessage]);


    return (
        <div className={`${styles.analysisStage}`} >

            <Eyebrow eyebrowSub="Stage 2" eyebrowMain="Analysis Under Process" />


            <div className={`${styles.stageWrapper} `}>

                <div className={`${styles.logsWrapper} `}>
                    {completedMessages.map((message, index) => (
                        <div key={index}>
                            {message}
                        </div>
                    ))}

                    {currentMessage?.startsWith(">") && (
                        <div>
                            {displayedMessage}
                        </div>
                    )}

                </div>


                <div className={`${styles.visualWrapper} `}>

                    <img src={visual} alt="visualImg" />

                </div>
            </div>

        </div>
    )
}

export default AnalysisStage
