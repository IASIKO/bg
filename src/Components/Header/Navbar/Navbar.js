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

        <div className={styles.pageTitle}>
          <a href="#">
            Home
          </a>
          <div></div>
        </div>

        <div className={styles.pageTitle}>
          <a href="#">
            Board Games
          </a>
          <div></div>
        </div>

        <div className={styles.pageTitle}>
          <a href="#">
            Gift Cards
          </a>
          <div></div>
        </div>

        <div className={styles.pageTitle}>
          <a href="#">
            Contact us
          </a>
          <div></div>
        </div>

        <div className={styles.pageTitle}>
          <a href="#">
            <img src={UK} alt="UK" />
            ENG
          </a>
          <div></div>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <span>
          <FaPhoneAlt /> 999 999 999
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
