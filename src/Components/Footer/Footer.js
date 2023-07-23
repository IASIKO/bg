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
        <div className={styles.footerList}>
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

        <div className={styles.footerList}>
          <ul>
            <li>
              <Link to="/contact">
                <span className={styles.pageSpan}>Contact us</span>
              </Link>
            </li>
            <li>
              <Link>
                <span className={styles.pageSpan}>Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link>
                <span className={styles.pageSpan}>
                  Terms and Conditions
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span className={styles.pageSpan}>Terms of delivery</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerC}>
          <span>© 2023 Giorgi Iaseshvili All rights reserved</span>
          <a
            href="https://www.linkedin.com/in/giorgi-iaseshvili/"
            target="_blank"
            rel="noreferrer"
          >
            Powered By G.I
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
