import React from "react";
import styles from "./BGContent.module.css";

const BGContent = ({ children }) => {
  return <div className={styles.bgContent}>{children}</div>;
};

export default BGContent;
