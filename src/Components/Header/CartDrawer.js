import React from "react";
import styles from "./CartDrawer.module.css";
import { GrClose } from "react-icons/gr";

const CartDrawer = ({ isOpen, isClose }) => {
  return (
    <div className={`${styles.cart} ${isOpen ? styles.open : ""}`}>
      <div className={styles.cartContent}></div>
      <div className={styles.close} onClick={isClose}>
        <GrClose />
      </div>
    </div>
  );
};

export default CartDrawer;
