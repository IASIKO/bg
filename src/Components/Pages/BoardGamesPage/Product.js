import React from "react";
import styles from "./Product.module.css";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { isUserAdmin } from "../../../application/utilis";
import { setSelectedProduct } from "../../../redux/slices/productSlice";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product, cartItems }) => {
  const userInfo = useSelector((state) => state.user.user.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isProductInCart = (productId) => {
    return cartItems?.some((item) => item.product._id === productId);
  };

  const { _id, name, price } = product;

  const onEditHandler = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/boardgames/edit/:${product._id}`);
  };

  return (
    <li key={_id} className={styles.li}>
      <Link to={`/boardgames/${name}`}>
        <img src={product.image} alt={name} />
        <h2>{name}</h2>
        <p>{price} ₾</p>
      </Link>
      {isProductInCart(_id) ? (
        <>
          <button onClick={() => dispatch(removeFromCart(product))}>-</button>
          <button onClick={() => dispatch(addToCart(product))}>+</button>
        </>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>Add</button>
      )}
      {isUserAdmin(userInfo) && (
        <button onClick={() => onEditHandler(product)}>Edit</button>
      )}
    </li>
  );
};

export default Product;
