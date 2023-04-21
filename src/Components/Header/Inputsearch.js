import React from "react";
import styles from "./Inputsearch.module.css";
import Button from "../../UI/Button";

const Inputsearch = () => {
  return (
    <>
      <input className={styles} type="search" placeholder="Search here..." />
      <Button>Search</Button>
    </>
  );
};

export default Inputsearch;
