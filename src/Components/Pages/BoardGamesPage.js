import React, { useEffect } from "react";
import AddButton from "./BoardGamesPage/AddButton";
import BGCover from "./BoardGamesPage/BGCover";
import BGContent from "../../UI/BGContent";
import CategorySideBar from "./BoardGamesPage/CategorySideBar";
import BGProductsList from "./BoardGamesPage/BGProductsList";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../UI/Loader";
import { fetchProducts } from "../../redux/slices/productSlice";

const BoardGamesPage = () => {
  const isLoading = useSelector((state) => state.user.product.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <BGCover />
      <AddButton />
      {isLoading ? (
        <Loader />
      ) : (
        <BGContent>
          <CategorySideBar />
          <BGProductsList />
        </BGContent>
      )}
    </>
  );
};

export default BoardGamesPage;
