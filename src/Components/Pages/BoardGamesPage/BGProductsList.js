import React, { useEffect } from "react";
import styles from "./BGProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSelectedProduct,
} from "../../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { isUserAdmin } from "../../../application/utilis";
import Paginate from "../../../UI/Paginate";

const BGProductsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const userInfo = useSelector((state) => state.user.user.userData);

  const pagination = useSelector((state) => state.user.product.pagination);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onEditHandler = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/boardgames/edit/:${product._id}`);
  };

  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const visibleProducts = productsData.slice(
    startIndex,
    startIndex + pagination.itemsPerPage
  );

  return (
    <section>
      <ul className={styles.productsList}>
        {visibleProducts.map((product) => {
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
      <Paginate />
    </section>
  );
};

export default BGProductsList;
