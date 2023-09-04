import React from "react";
import styles from "./Sort.module.css";

const Sort = ({ sort, setSort }) => {
  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  };

  const sortHandleChange = (value) => {
    if (value === "none") {
      setSort([...sort]);
    } else {
      let toType, toAscending;
      switch (value) {
        case "ascending":
          toType = true;
          toAscending = true;
          break;
        case "descending":
          toType = true;
          toAscending = false;
          break;
        case "high":
          toType = false;
          toAscending = true;
          break;
        case "low":
          toType = false;
          toAscending = false;
          break;
        default:
          break;
      }
      let current = [...sort];
      current.sort((a, b) =>
        toType
          ? compare(a.name, b.name, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      setSort([...current]);
    }
  };
  return (
    <>
      <select
        onChange={(e) => sortHandleChange(e.target.value)}
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
