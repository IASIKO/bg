import React, { useState } from "react";
import UK from "../../../Assets/UK.png";
import styles from "./Navbar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const onHomePageClickHandler = () => {
    setIsActive(true)
  }

  const onBGPageClickHandler = () => {
    setIsActive(true)
  }

  const onGiftCardPageClickHandler = () => {
    setIsActive(true)
  }

  const onContactPageClickHandler = () => {
    setIsActive(true)
  }


  

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.pageContainer}>
        <div className={!isActive ? styles.pageTitle : styles.active} onClick={onHomePageClickHandler}>
          <Link to="/">Home</Link>
          <div></div>
        </div>

        <div className={!isActive ? styles.pageTitle : styles.active} onClick={onBGPageClickHandler}>
          <Link to="/boardgames">Board Games</Link>
          <div></div>
        </div>

        <div className={!isActive ? styles.pageTitle : styles.active} onClick={onGiftCardPageClickHandler}>
          <Link to="/giftcards">Gift Cards</Link>
          <div></div>
        </div>

        <div className={!isActive ? styles.pageTitle : styles.active} onClick={onContactPageClickHandler}>
          <Link to="/contact">Contact us</Link>
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
