import React from 'react'
import styles from './Eyebrow.module.css'

const Eyebrow = ({eyebrowSub, eyebrowMain}) => {
    return (
        <div className={`${styles.eyebrow}`}>
            <span>{eyebrowSub}</span> {eyebrowMain}
        </div>
    )
}

export default Eyebrow
