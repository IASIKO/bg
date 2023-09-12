import React from "react";
import styles from "./Cover.module.css";
import logo from "../../Assets/logo.png";

const Cover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.backgroundOverlay}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Cover;
