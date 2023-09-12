import React from "react";
import styles from "./CartDrawer.module.css";

const CartDrawer = ({ isOpen, isClose }) => {
  return (
    <div className={`${styles.cart} ${isOpen ? styles.open : ""}`}>
      <div className={styles.cartContent}></div>
      <button className={styles.closeButton} onClick={isClose}>
        Close
      </button>
    </div>
  );
};

export default CartDrawer;
