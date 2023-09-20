import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSingleProductById } from "../../redux/slices/productSlice";
import Body from "../../UI/Body";
import Loader from "../../UI/Loader";
import SingleProductPage from "./Single Page/SingleProductPage";

const BGDetailPage = () => {
  const singleProduct = useSelector(
    (state) => state.user.product.singleProduct
  );
  const isLoading = useSelector((state) => state.user.product.loading);

  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProductById({ id: state.id }));
  }, [dispatch, state.id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Body>
          <SingleProductPage singleProduct={singleProduct} />
        </Body>
      )}
    </>
  );
};

export default BGDetailPage;
