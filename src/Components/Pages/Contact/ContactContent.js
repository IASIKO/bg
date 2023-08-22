import React from "react";
import styles from "./ContactContent.module.css";

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
        <div></div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.map}>
          <iframe
            src="https://maps.google.com/maps?q=giorgi%20mirotadze%2014&t=m&z=10&output=embed&iwloc=near"
            title="Giorgi Iaseshvili"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
