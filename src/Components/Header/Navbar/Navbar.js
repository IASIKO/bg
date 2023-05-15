import React, { useState } from "react";
import UK from "../../../Assets/UK.png";
import styles from "./Navbar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");

  const onHomeClickHandler = () => {
    setActivePage("home");
  };

  const onPageClickHandler = (page) => {
    setActivePage(page);
  };

  const getPageClassName = (page) => {
    return `${styles.pageTitle} ${
      activePage === page ? styles.pageTitleChanged : ""
    }`;
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.pageContainer}>
        <div className={getPageClassName("home")} onClick={onHomeClickHandler}>
          <Link to="/">Home</Link>
          <div></div>
        </div>

        <div
          className={getPageClassName("boardgames")}
          onClick={() => onPageClickHandler("boardgames")}
        >
          <Link to="/boardgames">Board Games</Link>
          <div></div>
        </div>

        <div
          className={getPageClassName("giftcards")}
          onClick={() => onPageClickHandler("giftcards")}
        >
          <Link to="/giftcards">Gift Cards</Link>
          <div></div>
        </div>

        <div
          className={getPageClassName("contact")}
          onClick={() => onPageClickHandler("contact")}
        >
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
