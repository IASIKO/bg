import React from "react";
import styles from "./CartContent.module.css";
import { useSelector } from "react-redux";

const CartContent = () => {
  const cartItems = useSelector((state) => state.user.cart.cartItems);

  return (
    <div className={styles.cartContent}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <React.Fragment key={item.product._id}>
            <div className={styles.cartInfo}>
              <img src={item.product.image} alt={item.product.name} />
              <h4>{item.product.name}</h4>
              <p>
                {item.quantity} x $ {item.product.price}
              </p>
            </div>
            <hr />
          </React.Fragment>
        ))
      ) : (
        <p className={styles.empty}>No products in the cart.</p>
      )}
    </div>
  );
};

export default CartContent;
