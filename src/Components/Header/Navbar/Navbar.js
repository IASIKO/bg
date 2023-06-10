import React from "react";
import UK from "../../../Assets/UK.png";
import styles from "./Navbar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.pageContainer}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          Home
          <div></div>
        </NavLink>

        <NavLink
          to="/boardgames"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Board Games
          <div></div>
        </NavLink>

        <NavLink
          to="/giftcards"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Gift Cards
          <div></div>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Contact us
          <div></div>
        </NavLink>

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
        <span className={styles.icon}>
          <BsFacebook />
        </span>
        <span>
          <GrInstagram className={styles.icon} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
