import React from 'react'
import styles from './Button.module.css'

const Button = ({children}) => {
  return (
    <button className={styles}>{children}</button>
  )
}

export default Button