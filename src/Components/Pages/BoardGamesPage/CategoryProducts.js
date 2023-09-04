import React, { useEffect } from "react";
import styles from "./CategoryProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProducts } from "../../../redux/slices/productSlice";
import { useParams } from "react-router-dom";
import CategorySideBar from "./CategorySideBar";
import BGContent from "../../../UI/BGContent";
import Loader from "../../../UI/Loader";
import Product from "./Product";

const CategoryProducts = () => {
  const isLoading = useSelector((state) => state.user.product.loading);
  const categoryProducts = useSelector(
    (state) => state.user.product.categoryProducts
  );
  const cartItems = useSelector((state) => state.user.cart.cartItems);

  const dispatch = useDispatch();
  const { categoryName } = useParams();

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
          <ul className={styles.productsList}>
            {categoryProducts.map((product) => {
              return (
                <Product
                  key={product._id}
                  product={product}
                  cartItems={cartItems}
                />
              );
            })}
          </ul>
        </BGContent>
      )}
    </>
  );
};

export default CategoryProducts;
