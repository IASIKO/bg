import React from "react";
import styles from "./SingleProductPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";

const SingleProductPage = ({ singleProduct }) => {
  const cartItems = useSelector((state) => state.user.cart.cartItems);
  const dispatch = useDispatch();

  const isProductInCart = (productId) => {
    return cartItems?.some((item) => item.product._id === productId);
  };

  const initialQuantity =
    cartItems.find((item) => item.product?._id === singleProduct?._id)
      ?.quantity || 0;

  return (
    <div className={styles.productDetail}>
      <div className={styles.productImage}>
        <img src={singleProduct?.image} alt={singleProduct?.name} />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{singleProduct?.name}</h1>
        <p className={styles.productDescription}>
          Description: {singleProduct?.description}
        </p>
        <p className={styles.productDescription}>
          Category: {singleProduct?.category}
        </p>
        <p className={styles.productPrice}>{singleProduct?.price} ₾</p>
        {isProductInCart(singleProduct?._id) ? (
          <div className={styles.quantity}>
            <button
              onClick={() => dispatch(removeFromCart(singleProduct))}
            >
              -
            </button>
            <h1>x{initialQuantity}</h1>
            <button
              onClick={() => dispatch(addToCart(singleProduct))}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className={styles.addToCartButton}
            onClick={() => dispatch(addToCart(singleProduct))}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
