import React from 'react'
import styles from './FeaturesCard.module.css'

const FeaturesCard = ({ img, heading, description }) => {
    return (
        <div className={`${styles.featuresCard}`}>
            
            {/* Image */}
            <div className={`${styles.imageWrapper}`}>
                <img src={img} alt={img} />
            </div>

            {/* Content */}
            <div className={`${styles.cardContent}`}>

                {/* Card Heading */}
                <h3 className={`${styles.cardHeadingExtra} cardHeading`} >{heading}</h3>

                {/* Card Description */}
                <p className="description">{description}</p>
            </div>
        </div>

    )
}

export default FeaturesCard
