import React from "react";
import { MdLocationOn } from "react-icons/md";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerBackgroundOverlay}></div>
      <span>
        <MdLocationOn />
      </span>
    </section>
  );
};

export default Footer;
