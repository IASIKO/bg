import React, { useEffect, useState } from "react";
import styles from "./BGProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../../../redux/slices/productSlice";
import { useLocation } from "react-router-dom";
import Paginate from "../../../UI/Paginate";
import Sort from "../../../UI/Sort";
import Product from "./Product";

const BGProductsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const pagination = useSelector((state) => state.user.product.pagination);
  const cartItems = useSelector((state) => state.user.cart.cartItems);

  const dispatch = useDispatch();
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

  return (
    <section>
      <Sort sort={sort} setSort={setSort} />
      <ul className={styles.productsList}>
        {sort.map((product) => {
          return (
            <Product
              key={product._id}
              product={product}
              cartItems={cartItems}
            />
          );
        })}
      </ul>
      <Paginate />
    </section>
  );
};

export default BGProductsList;
