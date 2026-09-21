import React from 'react'

import styles from './Form.module.css'

import Button from '../../../ui/Button/Button'

const Form = () => {
  return (
    <form>
      <input type="text" name="fullName" placeholder='Enter Your Full Name' required />

      <input type="email" name="email" placeholder='Enter your email' required />

      <input type="text" name="fullName" placeholder='What is this regarding?' required />

      <textarea name="message" rows="5" placeholder='Tell us how we can help...' required></textarea>

      <Button value="Send message" />    
    </form>
  )
}

export default Form
