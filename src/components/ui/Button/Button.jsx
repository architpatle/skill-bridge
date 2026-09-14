import React from 'react'
import styles from './Button.module.css'

const Button = ({ value, variant = "primary" }) => {
    return (
        <button className={`${styles.btn} ${styles[variant]}`}>
            <span>{value}</span>
        </button>
    )
}

export default Button
