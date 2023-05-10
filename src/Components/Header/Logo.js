import React from 'react'
import styles from './Logo.module.css'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => {
  

  return (
    <Link to='/' className={styles.logo}>
        <img src={logo} alt='logo Header'/>
    </Link>
  )
}

export default Logo