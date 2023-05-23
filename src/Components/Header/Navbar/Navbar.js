import React, { useEffect, useState } from "react";
import UK from "../../../Assets/UK.png";
import styles from "./Navbar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");

  console.log("Navbar");

  const onPageClickHandler = (page) => {
    setActivePage(page);
    console.log(page);
  };

  // useEffect(() => {
  //   onPageClickHandler()
  // },[]);

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.pageContainer}>
        <div
          className={activePage === "home" ? styles.active : styles.pageTitle}
          onClick={() => onPageClickHandler("home")}
        >
          <Link to="/">Home</Link>
          <div></div>
        </div>

        <div
          className={
            activePage === "boardgames" ? styles.active : styles.pageTitle
          }
          onClick={() => onPageClickHandler("boardgames")}
        >
          <Link to="/boardgames">Board Games</Link>
          <div></div>
        </div>

        <div
          className={
            activePage === "giftcard" ? styles.active : styles.pageTitle
          }
          onClick={() => onPageClickHandler("giftcard")}
        >
          <Link to="/giftcards">Gift Cards</Link>
          <div></div>
        </div>

        <div
          className={
            activePage === "contact" ? styles.active : styles.pageTitle
          }
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
