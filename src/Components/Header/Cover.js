import React from "react";
import bgcover from '../../Assets/bgcover.jpg'
import styles from './Cover.module.css'

const Cover = () => {
  return (
    <div className={styles.cover}>
      <img src={bgcover} alt="bgcover"/>
    </div>
  );
};

export default Cover;
