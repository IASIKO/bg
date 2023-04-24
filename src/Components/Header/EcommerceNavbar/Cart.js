import React from 'react'
import styles from './Cart.module.css'
import {ImCart} from 'react-icons/im'

const Cart = () => {
  return (
    <div>
      <ImCart className={styles.icon}/>
    </div>
  )
}

export default Cart