import React from "react";
import styles from "./Sort.module.css";

const Sort = ({ handleChange }) => {
  return (
    <>
      <select
        onChange={(e) => handleChange(e.target.value)}
        className={styles.sortSelect}
      >
        <option value="none">Default sorting</option>
        <option value="ascending">Alphabetically, A-Z</option>
        <option value="descending">Alphabetically, Z-A</option>
        <option value="high">Low to high (Price)</option>
        <option value="low">High to low (Price)</option>
      </select>
    </>
  );
};

export default Sort;
