import React, { useEffect } from "react";
import styles from "./BGsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { isUserAdmin } from "../../../application/utilis";
import { useNavigate } from "react-router-dom";
import {
  fetchProducts,
  setSelectedProduct,
} from "../../../redux/slices/productSlice";
import Loader from "../../../UI/Loader";

const BGsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const userInfo = useSelector((state) => state.user.user.userData);
  const isLoading = useSelector((state) => state.user.product.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onEditHandler = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/boardgames/edit/:${product._id}`);
  };

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
                  {isUserAdmin(userInfo) && (
                    <button onClick={() => onEditHandler(product)}>Edit</button>
                  )}
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
