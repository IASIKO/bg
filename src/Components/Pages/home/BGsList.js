import React from "react";
import styles from "./BGsList.module.css";
import { useSelector } from "react-redux";
import BGProductsList from "../BoardGamesPage/BGProductsList";

const BGsList = () => {

  return (
    <>
      <h1 className={styles.lastAddedTitle}>Last added</h1>
      <BGProductsList />
    </>
  );
};

export default BGsList;
