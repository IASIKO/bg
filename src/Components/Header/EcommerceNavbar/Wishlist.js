import React from 'react'
import styles from './Wishlist.module.css'
import {FaRegHeart} from 'react-icons/fa'


const Wishlist = () => {
  return (
    <div>
      <FaRegHeart className={styles.icon}/>
    </div>
  )
}

export default Wishlist