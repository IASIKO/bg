import React from "react";
import styles from "./CategorySideBar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategorySideBar = () => {
  const categories = useSelector((state) => state.user.product.categories);
  return (
    <section className={styles.sidebarWrapper}>
      <h2>Categories</h2>
      <ul className={styles.categoriesList}>
        {categories.map((item) => {
          return (
            <li key={item._id}>
              <Link to={`/boardgames/categories/${item.name}`}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategorySideBar;
