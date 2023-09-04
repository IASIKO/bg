import React, { useEffect, useState } from "react";
import styles from "./CategoryProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryProducts,
  setPagination,
} from "../../../redux/slices/productSlice";
import { useLocation, useParams } from "react-router-dom";
import CategorySideBar from "./CategorySideBar";
import BGContent from "../../../UI/BGContent";
import Loader from "../../../UI/Loader";
import Product from "./Product";
import Sort from "../../../UI/Sort";
import Paginate from "../../../UI/Paginate";

const CategoryProducts = () => {
  const isLoading = useSelector((state) => state.user.product.loading);
  const categoryProducts = useSelector(
    (state) => state.user.product.categoryProducts
  );
  const cartItems = useSelector((state) => state.user.cart.cartItems);
  const pagination = useSelector((state) => state.user.product.pagination);

  const [sort, setSort] = useState([]);
  const [isOnBoardGamesPage, setIsOnBoardGamesPage] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const { categoryName } = useParams();

  useEffect(() => {
    if (!isOnBoardGamesPage) {
      dispatch(setPagination({ currentPage: 1 }));
    }
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const visibleProducts = categoryProducts.slice(startIndex, endIndex);
    setSort([...visibleProducts]);
  }, [
    isOnBoardGamesPage,
    pagination.currentPage,
    pagination.itemsPerPage,
    categoryProducts,
    dispatch,
  ]);

  useEffect(() => {
    setIsOnBoardGamesPage(location.pathname.includes("/boardgames"));
  }, [location.pathname]);

  useEffect(() => {
    dispatch(
      fetchCategoryProducts(`${categoryName}?page=1&size=20&sort=name,asc`)
    );
  }, [categoryName, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BGContent>
          <CategorySideBar />
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
        </BGContent>
      )}
    </>
  );
};

export default CategoryProducts;
