import React from 'react'
import styles from './GapCard.module.css'

const GapCard = ({ cardHeading, cardDescription, icon: Icon }) => {
    return (
        <div className={`${styles.gapCard}`}>

            {/* Icon */}
            <div className="iconWrap">
                {Icon && <Icon className="icon" />}
            </div>

            <div className={`${styles.cardContent}`}>

                {/* Card Heading */}
                <h3 className={`${styles.cardHeadingExtra} cardHeading`} >{cardHeading}</h3>

                {/* Card Description */}
                <p className=" description">{cardDescription}</p>
            </div>

        </div>
    )
}

export default GapCard
