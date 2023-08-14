import React from "react";
import styles from './BGContent.module.css'
import CategorySideBar from "./CategorySideBar";
import BGProductsList from "./BGProductsList";

const BGContent = () => {
  return (
    <div className={styles.bgContent}>
      <CategorySideBar />
      <BGProductsList />
    </div>
  );
};

export default BGContent;
