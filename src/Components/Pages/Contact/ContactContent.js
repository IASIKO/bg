import React from "react";
import styles from "./ContactContent.module.css";
import { FaMapMarkerAlt, FaPhone, FaRegEnvelopeOpen } from "react-icons/fa";

const ContactContent = () => {
  return (
    <section className={styles.contactWrapper}>
      <div className={styles.contentContainer}>
        <h1>About us</h1>
        <p>
          Board Games Corner is the largest store of board games in Georgia,
          where more than 300 cognitive, entertaining and interesting board
          games are collected. In addition to the store, there is board games
          club too, where you can play various board games.
        </p>
        <div className={styles.timeTitle}>
          <strong>მაღაზიის სამუშაო საათები:</strong>
          <br />
          <strong>ყოველდღე (12:00 – 22:00)</strong>
        </div>
        <div className={styles.iconInfoContainer}>
          <div>
            <i>
              <FaMapMarkerAlt />
            </i>
            <span>Tbilisi, 99 Tina Iosebidze St</span>
          </div>
          <div>
            <i>
              <FaPhone />
            </i>
            <span>999 99 99 99</span>
          </div>
          <div>
            <i>
              <FaRegEnvelopeOpen />
            </i>
            <span>info.boardgames@gmail.com</span>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.map}>
          <iframe
            src="https://maps.google.com/maps?q=tina%20iosebidze%2099&t=m&z=10&output=embed&iwloc=near"
            title="Tina Iosebidze"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
