import React, { useEffect } from "react";
import styles from "./BGsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
} from "../../../redux/slices/productSlice";
import Loader from "../../../UI/Loader";

const BGsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const isLoading = useSelector((state) => state.user.product.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className={styles.lastAddedTitle}>Last added</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <ul className={styles.productsList}>
            {productsData.map((product) => {
              return (
                <li key={product._id}>
                  <img src={product.image} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>{product.price} ₾</p>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default BGsList;
