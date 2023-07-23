import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerBackgroundOverlay}></div>
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
    </section>
  );
};

export default Footer;
