import React from "react";
import styles from "./CategorySideBar.module.css";
import { useSelector } from "react-redux";

const CategorySideBar = () => {
  const categories = useSelector((state) => state.user.product.categories);
  return (
    <section className={styles.sidebarWrapper}>
      <ul className={styles.categoriesList}>
        {categories.map((item) => {
          return (
            <li key={item._id}>
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategorySideBar;
