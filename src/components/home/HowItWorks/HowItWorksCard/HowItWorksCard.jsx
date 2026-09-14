import React from 'react'
import styles from './HowItWorksCard.module.css'

const HowItWorksCard = ({ number, icon: Icon, heading, description }) => {
    return (
        <div>
            <div className={`${styles.howItWorksCard}`}>
                <div className={`${styles.topArea}`}>

                    <div className={`${styles.number}`}>
                        0{number}
                    </div>
                    {/* <div className={`${styles.iconWrapExtra} iconWrap`}>
                        {Icon && <Icon className={`${styles.iconExtra} icon`} />}
                    </div> */}
                </div>
                <div className={`${styles.cardContent}`}>

                    {/* Card Heading */}
                    <h3 className={`${styles.cardHeadingExtra} cardHeading`} >{heading}</h3>

                    {/* Card Description */}
                    <p className=" description">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorksCard
