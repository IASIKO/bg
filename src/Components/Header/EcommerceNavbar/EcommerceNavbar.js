import React from 'react'
import styles from './EcommerceNavbar.module.css'
import Wishlist from './Wishlist'
import Login from './Login'
import Cart from './Cart'

const EcommerceNavbar = () => {
  return (
    <div className={styles.eContainer}>
        <Wishlist/>
        <Login/>
        <Cart/>
    </div>
  )
}

export default EcommerceNavbar