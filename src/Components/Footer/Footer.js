import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerBackgroundOverlay}></div>
      <div className={styles.divFlex}>
        <div className={styles.footerInfo}>
          <ul>
            <li>
              <i>
                <FaMapMarkerAlt />
              </i>
              <span>Tbilisi, 99 Tina Iosebidze St</span>
            </li>
            <li>
              <i>
                <FaPhone />
              </i>
              <span>999 99 99 99</span>
            </li>
            <li>
              <i>
                <FaRegEnvelopeOpen />
              </i>
              <span>info.boardgame@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className={styles.footerPages}>
          <Link to="/contact">
            <span>Contact us</span>
          </Link>
          <Link>
            <span>Privacy Policy</span>
          </Link>
          <Link>
            <span>Terms and Conditions</span>
          </Link>
          <Link>
            <span>Terms of delivery</span>
          </Link>
        </div>

        <div className={styles.footerC}>
          <span>© 2023 Giorgi Iaseshvili All rights reserved</span>
          <a href="https://www.linkedin.com/in/giorgi-iaseshvili/">
            Powered By G.I
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
