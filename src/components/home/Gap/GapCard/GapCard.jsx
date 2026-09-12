import React from 'react'
import styles from './GapCard.module.css'

const GapCard = ({ cardHeading, cardDescription, icon: Icon }) => {
    return (
        <div className={`${styles.gapCard}`}>

            {/* Icon */}
            <div className={`${styles.iconWrap}`}>
                {Icon && <Icon className={`${styles.icon}`} />}
            </div>

            <div className={`${styles.cardContent}`}>
                
                {/* Card Heading */}
                <h3 className={`${styles.cardHeading}`} >{cardHeading}</h3>

                {/* Card Description */}
                <p className={`${styles.cardDescription} description`}>{cardDescription}</p>
            </div>

        </div>
    )
}

export default GapCard
