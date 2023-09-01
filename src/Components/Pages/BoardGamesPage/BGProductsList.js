import React, { useEffect, useState } from "react";
import styles from "./BGProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setPagination,
  setSelectedProduct,
} from "../../../redux/slices/productSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { isUserAdmin } from "../../../application/utilis";
import Paginate from "../../../UI/Paginate";
import Sort from "../../../UI/Sort";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";

const BGProductsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const userInfo = useSelector((state) => state.user.user.userData);
  const pagination = useSelector((state) => state.user.product.pagination);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [sort, setSort] = useState([]);
  const [isOnBoardGamesPage, setIsOnBoardGamesPage] = useState(false);

  useEffect(() => {
    setIsOnBoardGamesPage(location.pathname.includes("/boardgames"));
  }, [location.pathname]);

  useEffect(() => {
    if (!isOnBoardGamesPage) {
      dispatch(setPagination({ currentPage: 1 }));
    }

    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const visibleProducts = productsData.slice(startIndex, endIndex);
    setSort([...visibleProducts]);
  }, [
    isOnBoardGamesPage,
    pagination.currentPage,
    productsData,
    pagination.itemsPerPage,
    dispatch,
  ]);

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
      setSort([...sort]);
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
        default:
          break;
      }
      let current = [...sort];
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
          const { _id, name, price } = product;
          return (
            <li key={_id}>
              <img src={product.image} alt={name} />
              <h2>{name}</h2>
              <p>{price} ₾</p>
              <button onClick={() => dispatch(addToCart(_id, name, price))}>
                +
              </button>
              <button onClick={() => dispatch(removeFromCart(_id))}>-</button>
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
