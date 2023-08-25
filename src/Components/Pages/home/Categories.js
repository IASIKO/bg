import React from "react";
import styles from "./Categories.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.user.product.categories);
  const navigate = useNavigate();

  const onCategoryClickHandler = (categoryName) => {
    navigate(`/boardgames/categories/${categoryName}`);
  };

  return (
    <>
      <h1 className={styles.categoriesTitle}>Categories</h1>
      <div className={styles.homeCategoriesContainer}>
        {categories.map((item) => {
          return (
            <span onClick={() => onCategoryClickHandler(item.name)}>
              {item.name}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
