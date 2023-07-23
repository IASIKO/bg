import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerBackgroundOverlay}></div>
      <div>
        <i>
          <MdLocationOn />
        </i>
        <span></span>
        <i>
          <FaPhone />
        </i>
        <span></span>
        <i>
          <FaRegEnvelopeOpen />
        </i>
        <span></span>
      </div>
    </section>
  );
};

export default Footer;
