import React from 'react'

import styles from './HowCard.module.css'

const HowCard = ({ icon: Icon, heading, description, number }) => {
    return (
        <div className={`${styles.howCard}`}>
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
                <p className={`${styles.descriptionExtra} description`}>{description}</p>
            </div>

        </div>
    )
}

export default HowCard
