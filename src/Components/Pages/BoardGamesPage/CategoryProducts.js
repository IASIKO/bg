import React, { useEffect } from "react";
import styles from "./CategoryProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryProducts,
  setSelectedProduct,
} from "../../../redux/slices/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import { isUserAdmin } from "../../../application/utilis";

const CategoryProducts = () => {
  const categoryProductsData = useSelector(
    (state) => state.user.product.productsData
  );
  console.log(categoryProductsData);
  const userInfo = useSelector((state) => state.user.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(
      fetchCategoryProducts(`${categoryName}?page=1&size=20&sort=name,asc`)
    );
  }, [categoryName]);

  const onEditHandler = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/boardgames/edit/:${product._id}`);
  };

  return (
    <section>
      <ul className={styles.productsList}>
        {categoryProductsData.map((product) => {
          return (
            <li key={product._id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price} ₾</p>
              {isUserAdmin(userInfo) && (
                <button onClick={() => onEditHandler(product)}>Edit</button>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategoryProducts;
