import React, { useEffect } from "react";
import styles from "./BGProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSelectedProduct,
} from "../../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { isUserAdmin } from "../../../application/utilis";

const BGProductsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const userInfo = useSelector((state) => state.user.user.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      fetchProducts()
    );
  }, []);

  const onEditHandler = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/boardgames/edit/:${product._id}`);
  };

  return (
    <section>
      <ul className={styles.productsList}>
        {productsData.map((product) => {
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

export default BGProductsList;
