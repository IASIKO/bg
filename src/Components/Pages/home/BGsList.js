import React from "react";
import styles from "./BGsList.module.css";
import BG from "./BG";
import { useSelector } from "react-redux";
import BGProductsList from "../BoardGamesPage/BGProductsList";

const BGsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);

  return (
    <>
      <h1 className={styles.lastAddedTitle}>Last added</h1>
      <BGProductsList />
    </>
  );
};

export default BGsList;
