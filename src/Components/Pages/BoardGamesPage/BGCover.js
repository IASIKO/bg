import React from "react";
import styles from "./BGCover.module.css";

const BGCover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.backgroundOverlay}>
        <span>Shop</span>
      </div>
    </div>
  );
};

export default BGCover;
