import React from "react";
import styles from "./Orders.module.css";
import { NavLink } from "react-router-dom";

const Orders = () => {
  return (
    <div className={styles.ordersContainer}>
      No order has been made yet.
      <NavLink to='/boardgames'>
        <button>Browse products</button>
      </NavLink>
    </div>
  );
};

export default Orders;
