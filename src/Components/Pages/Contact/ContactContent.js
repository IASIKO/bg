import React from "react";
import styles from "./ContactContent.module.css";
import { FaMapMarkerAlt, FaPhone, FaRegEnvelopeOpen } from "react-icons/fa";

const ContactContent = () => {
  return (
    <section className={styles.contactWrapper}>
      <div className={styles.contentContainer}>
        <div className={styles.about}>
          <h1>About us</h1>
          <p>
            Board Games Corner is the largest store of board games in Georgia,
            where more than 300 cognitive, entertaining and interesting board
            games are collected. In addition to the store, there is board games
            club too, where you can play various board games.
          </p>
        </div>
        <div className={styles.timeTitle}>
          <strong>მაღაზიის სამუშაო საათები:</strong>
          <br />
          <strong>ყოველდღე (12:00 – 22:00)</strong>
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.infoContainer}>
            <div className={styles.iconInfoContainer}>
              <i>
                <FaPhone />
              </i>
            </div>
            <div className={styles.textInfoContainer}>
              <h3>Phone</h3>
              <p>
                <span>999 99 99 99</span>
              </p>
            </div>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.iconInfoContainer}>
              <i>
                <FaRegEnvelopeOpen />
              </i>
            </div>
            <div className={styles.textInfoContainer}>
              <h3>E-mail</h3>
              <p>
                <span>info.boardgames@gmail.com</span>
              </p>
            </div>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.iconInfoContainer}>
              <i>
                <FaMapMarkerAlt />
              </i>
            </div>
            <div className={styles.textInfoContainer}>
              <h3>Address</h3>
              <p>
                <span>Tbilisi, 99 Tina Iosebidze St</span>
              </p>
            </div>
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
