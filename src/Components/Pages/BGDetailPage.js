import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchSingleProductById } from "../../redux/slices/productSlice";
import Body from "../../UI/Body";
import Loader from "../../UI/Loader";

const BGDetailPage = () => {
  const singleProduct = useSelector(
    (state) => state.user.product.singleProduct
  );
  const isLoading = useSelector((state) => state.user.product.loading);

  console.log(singleProduct);
  const params = useParams();
  console.log(params);
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProductById({ id: state.id }));
  }, [dispatch, state.id]);

  return <>{isLoading ? <Loader /> : <Body>{singleProduct?.name}</Body>}</>;
};

export default BGDetailPage;
