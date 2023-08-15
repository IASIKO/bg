import React from "react";
import styles from "./CategorySideBar.module.css";
import { useSelector } from "react-redux";

const CategorySideBar = () => {
  const categories = useSelector((state) => state.user.product.categories);
  console.log(categories);
  return (
    <section className={styles.sidebarWrapper}>
      <ul className={styles.categoriesList}>
        {categories.map((item) => {
          return <li key={item._id}>{item.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default CategorySideBar;
