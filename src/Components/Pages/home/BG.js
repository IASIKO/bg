import React from "react";
import styles from "./BG.module.css";
import { Link } from "react-router-dom";

const BG = (props) => {
  return (
    <>
      {props.bgData.map((item) => (
        <li className={styles.bg} key={item._id}>
          <div className={styles.imgDiv}>
            <Link to={item._id}>
              <img src={item.image} alt={item.name} />
            </Link>
          </div>
          <div>
            <Link to={item._id}>
              <h2 className={styles.title}>{item.name}</h2>
            </Link>
            <span className={styles.price}>{item.price}</span>
          </div>
        </li>
      ))}
    </>
  );
};

export default BG;
