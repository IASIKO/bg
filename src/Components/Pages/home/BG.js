import React from "react";
import styles from "./BG.module.css";
import { Link } from "react-router-dom";

const BG = (props) => {
  return (
    <>
      {props.bgData.map((item) => (
        <li className={styles.bg} key={item.id}>
          <div className={styles.imgDiv}>
            <Link to={item.id}>
              <img src={item.img} alt={item.title} />
            </Link>
          </div>
          <div>
            <Link to={item.id}>
              <h2 className={styles.title}>{item.title}</h2>
            </Link>
            <span className={styles.price}>{item.price}</span>
          </div>
        </li>
      ))}
    </>
  );
};

export default BG;
