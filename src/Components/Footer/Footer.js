import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerBackgroundOverlay}></div>
      <span>
        <MdLocationOn />
      </span>

      <span>
        <FaPhoneFlip />
      </span>
    </section>
  );
};

export default Footer;
