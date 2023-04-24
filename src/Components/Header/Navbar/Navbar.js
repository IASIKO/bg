import React from "react";
import UK from "../../../Assets/UK.png";
import styles from "./Navbar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.pageContainer}>
        <a href="#" className={styles.page}>
          Home
        </a>
        <a href="#" className={styles.page}>
          Board Games
        </a>
        <a href="#" className={styles.page}>
          Gift Cards
        </a>
        <a href="#" className={styles.page}>
          Contact us
        </a>
        <a href="#" className={styles.page}>
          <img src={UK} />
          ENG
        </a>
      </div>

      <div className={styles.infoContainer}>
        <span>
          <FaPhoneAlt />
          {" "}
          999 999 999
        </span>
        <span>
          <BsFacebook />
        </span>
        <span>
          <GrInstagram />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
