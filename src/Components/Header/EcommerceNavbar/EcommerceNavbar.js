import React from "react";
import styles from "./EcommerceNavbar.module.css";
import { ImCart } from "react-icons/im";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const EcommerceNavbar = () => {
  return (
    <div className={styles.eContainer}>
      <div>
        <i>
          <FaRegHeart />
        </i>
      </div>
      <div>
        <Link to="/register">
          <i>
            <RxPerson />
          </i>
        </Link>
      </div>
      <div className={styles.cartIcon}>
        <i>
          <ImCart />
          <span>0</span>
        </i>
      </div>
    </div>
  );
};

export default EcommerceNavbar;
