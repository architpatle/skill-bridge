import React from 'react'
import styles from './Button.module.css'

const Button = ({ value, variant = "primary" }) => {
    return (
        <button className={`${styles.btn} ${styles[variant]}`}>
            {value}
        </button>
    )
}

export default Button
