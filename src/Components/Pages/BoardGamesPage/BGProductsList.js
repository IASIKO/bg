import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";

const BGProductsList = () => {
  const productsData = useSelector((state) => state.user.product.productsData);
  const dispatch = useDispatch();

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
          </div>
        );
      })}
    </div>
  );
};

export default BGProductsList;
