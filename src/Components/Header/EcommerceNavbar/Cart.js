import React from 'react'
import styles from './Cart.module.css'
import {ImCart} from 'react-icons/im'

const Cart = () => {
  return (
    <div  className={styles.icon}>
      <ImCart/>
      <span>0</span>
    </div>
  )
}

export default Cart