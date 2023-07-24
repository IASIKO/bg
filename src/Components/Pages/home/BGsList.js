import React from 'react'
import styles from './BGsList.module.css'
import BG from './BG'


const BGsList = () => {
  return (
    <>
        <h1 className={styles.lastAddedTitle}>Last added</h1>
        <ul className='bgs'>
          <BG/>
        </ul>
    </>
  )
}

export default BGsList