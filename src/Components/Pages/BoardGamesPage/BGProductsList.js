import React, { useState } from "react";
import styles from "./BGProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { isUserAdmin } from "../../../application/utilis";
import Paginate from "../../../UI/Paginate";
import Sort from "../../../UI/Sort";

const BGProductsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const userInfo = useSelector((state) => state.user.user.userData);
  const pagination = useSelector((state) => state.user.product.pagination);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const visibleProducts = productsData.slice(
    startIndex,
    startIndex + pagination.itemsPerPage
  );
  const [sort, setSort] = useState(visibleProducts);

  const onEditHandler = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/boardgames/edit/:${product._id}`);
  };

  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  };

  const handleChange = (value) => {
    if (value === "none") {
      setSort([...visibleProducts]);
    } else {
      let toType, toAscending;
      switch (value) {
        case "ascending":
          toType = true;
          toAscending = true;
          break;
        case "descending":
          toType = true;
          toAscending = false;
          break;
        case "high":
          toType = false;
          toAscending = true;
          break;
        case "low":
          toType = false;
          toAscending = false;
          break;
      }
      let current = [...visibleProducts];
      current.sort((a, b) =>
        toType
          ? compare(a.name, b.name, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      setSort([...current]);
    }
  };

  return (
    <section>
      <Sort handleChange={handleChange} />
      <ul className={styles.productsList}>
        {sort.map((product) => {
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
