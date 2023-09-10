import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchSingleProductById } from "../../redux/slices/productSlice";

const BGDetailPage = () => {
  const singleProduct = useSelector(
    (state) => state.user.product.singleProduct
  );

  console.log(singleProduct);
  const params = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProductById({ id: state.id }));
  }, [dispatch, state.id]);

  return <div>{params.name}</div>;
};

export default BGDetailPage;
