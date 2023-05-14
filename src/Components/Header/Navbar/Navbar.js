import React, { useState } from "react";
import UK from "../../../Assets/UK.png";
import styles from "./Navbar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isStyleChange, setIsStyleChange] = useState(styles.pageTitle);
  const [isActive, setIsActive] = useState(false)

  const onHomeClickHandler = () => {
    setIsStyleChange(styles.pageTitleChanged);
  };

  const onBGClickHandler = () => {
    setIsStyleChange(styles.pageTitleChanged);
  };
  const onGiftCardClickHandler = () => {
    setIsStyleChange(styles.pageTitleChanged);
  };
  const onContactClickHandler = () => {
    setIsStyleChange(styles.pageTitleChanged);
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.pageContainer}>
        <div className={isStyleChange} onClick={onHomeClickHandler}>
          <Link to="/">Home</Link>
          <div></div>
        </div>

        <div className={isStyleChange} onClick={onBGClickHandler}>
          <Link to="/boardgames">Board Games</Link>
          <div></div>
        </div>

        <div className={isStyleChange} onClick={onGiftCardClickHandler}>
          <Link to="/giftcards">Gift Cards</Link>
          <div></div>
        </div>

        <div className={isStyleChange} onClick={onContactClickHandler}>
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
