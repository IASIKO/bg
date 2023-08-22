import React from "react";
import styles from "./CategorySideBar.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CategorySideBar = () => {
  const categories = useSelector((state) => state.user.product.categories);
  return (
    <section className={styles.sidebarWrapper}>
      <h2>Categories</h2>
      {categories.map((item) => {
        return (
          <NavLink
            key={item._id}
            to={`/boardgames/categories/${item.name}`}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            {item.name}
          </NavLink>
        );
      })}
    </section>
  );
};

export default CategorySideBar;
