import React from "react";
import UK from "../../../Assets/UK.png";
import styles from "./Navbar.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onPageClickHandler = (page) => {
    navigate(page)
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.pageContainer}>
        <div
          className={location.pathname === "/" ? styles.active : styles.pageTitle}
          onClick={() => onPageClickHandler("/")}
        >
          <Link to="/">Home</Link>
          <div></div>
        </div>

        <div
          className={
            location.pathname === "/boardgames" ? styles.active : styles.pageTitle
          }
          onClick={() => onPageClickHandler("/boardgames")}
        >
          <Link to="/boardgames">Board Games</Link>
          <div></div>
        </div>

        <div
          className={
            location.pathname === "/giftcards" ? styles.active : styles.pageTitle
          }
          onClick={() => onPageClickHandler("/giftcards")}
        >
          <Link to="/giftcards">Gift Cards</Link>
          <div></div>
        </div>

        <div
          className={
            location.pathname === "/contact" ? styles.active : styles.pageTitle
          }
          onClick={() => onPageClickHandler("/contact")}
        >
          <Link to="/contact">Contact us</Link>
          <div></div>
        </div>

        <div className={styles.pageTitle}>
          <a href="language">
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
