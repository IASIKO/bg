import React from "react";
import styles from "./BG.module.css";
import { Link } from "react-router-dom";

const BG = (props) => {
  return (
    <>
      {props.bgData.map((item) => (
        <Link key={item.id}>
          <li className={styles.bg}>
            <div className={styles.imgDiv}>
              <img src={item.img} alt={item.title} />
            </div>
            <div>
              <h2 className={styles.title}>{item.title}</h2>
              <span className={styles.price}>{item.price}</span>
            </div>
          </li>
        </Link>
      ))}
    </>
  );
};

export default BG;
