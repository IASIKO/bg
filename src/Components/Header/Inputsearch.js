import React from "react";
import styles from "./Inputsearch.module.css";
import Button from "../../UI/Button";

const Inputsearch = () => {
  return (
    <div>
      <input className={styles} type="search" placeholder="Search here..." />
      <Button>Search</Button>
    </div>
  );
};

export default Inputsearch;
