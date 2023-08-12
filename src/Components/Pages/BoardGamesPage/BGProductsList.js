import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSelectedProduct,
} from "../../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { isUserAdmin } from "../../../application/utilis";

const BGProductsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const userInfo = useSelector((state) => state.user.user.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProductsData = () => {
    const name = productsData.name;
    const description = productsData.description;
    const category = productsData.category;
    const price = productsData.price;
    const image = productsData.image;

    dispatch(
      fetchProducts({ products: { name, description, category, price, image } })
    );
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const onEditHandler = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/boardgames/edit/:${product._id}`);
  };

  return (
    <div>
      {productsData.map((product) => {
        return (
          <div key={product._id}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <img src={product.image} alt={product.name} />
            {isUserAdmin(userInfo) && (
              <button onClick={() => onEditHandler(product._id)}>Edit</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BGProductsList;
