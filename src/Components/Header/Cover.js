import React from "react";
import styles from "./Cover.module.css";
import logo from "../../Assets/logo.png";

const Cover = () => {
  return (
    <section className={styles.cover}>
      <div className={styles.backgroundOverlay}></div>
      <img src={logo} alt="logo" />
    </section>
  );
};

export default Cover;
