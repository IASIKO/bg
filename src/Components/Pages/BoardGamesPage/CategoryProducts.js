import React, { useEffect } from "react";
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
          {categoryProducts.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </BGContent>
      )}
    </>
  );
};

export default CategoryProducts;
