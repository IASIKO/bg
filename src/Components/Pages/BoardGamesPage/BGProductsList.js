import React, { useEffect, useState } from "react";
import styles from "./BGProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setPagination,
  setSelectedProduct,
} from "../../../redux/slices/productSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Paginate from "../../../UI/Paginate";
import Sort from "../../../UI/Sort";
import Product from "./Product";

const BGProductsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const pagination = useSelector((state) => state.user.product.pagination);
  const cartItems = useSelector((state) => state.user.cart.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [sort, setSort] = useState([]);
  const [isOnBoardGamesPage, setIsOnBoardGamesPage] = useState(false);

  const { currentPage, totalPage } = useSelector(
    (state) => state.user.product.pagination
  );

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

  const sortHandleChange = (value) => {
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
      <Sort handleChange={sortHandleChange} />
      <ul className={styles.productsList}>
        {sort.map((product) => {
          return (
            <Product
              key={product._id}
              product={product}
              cartItems={cartItems}
              onEditHandler={onEditHandler}
            />
          );
        })}
      </ul>
      <Paginate currentPage={currentPage} totalPage={totalPage} />
    </section>
  );
};

export default BGProductsList;
