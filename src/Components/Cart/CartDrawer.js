import React from "react";
import styles from "./CartDrawer.module.css";
import { GrClose } from "react-icons/gr";
import CartContent from "./CartContent";

const CartDrawer = ({ isOpen, isClose }) => {
  return (
    <>
      <div className={`${styles.cart} ${isOpen ? styles.open : ""}`}>
      <div className={styles.backdrop} onClick={isClose}></div>
        <div className={styles.cartContent}></div>
        <div className={styles.close} onClick={isClose}>
          <GrClose />
        </div>
        <CartContent />
      </div>
    </>
  );
};

export default CartDrawer;
