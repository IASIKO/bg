import React from 'react'
import styles from './Body.module.css'

const Body = ({children}) => {
  return (
    <section className={styles.body}>{children}</section>
  )
}

export default Body