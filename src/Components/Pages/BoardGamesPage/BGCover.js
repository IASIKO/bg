import React from "react";
import styles from "./BGCover.module.css";

const BGCover = () => {
  return (
    <section className={styles.cover}>
      <div className={styles.backgroundOverlay}></div>
      <span>Shop</span>
    </section>
  );
};

export default BGCover;
