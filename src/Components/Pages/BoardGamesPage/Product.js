import React from "react";
import styles from "./Product.module.css";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { isUserAdmin } from "../../../application/utilis";

const Product = ({ product, cartItems, onEditHandler }) => {
  const userInfo = useSelector((state) => state.user.user.userData);

  const dispatch = useDispatch();

  const isProductInCart = (productId) => {
    return cartItems?.some((item) => item.product._id === productId);
  };

  const { _id, name, price } = product;

  return (
    <li key={_id} className={styles.li}>
      <img src={product.image} alt={name} />
      <h2>{name}</h2>
      <p>{price} ₾</p>
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
