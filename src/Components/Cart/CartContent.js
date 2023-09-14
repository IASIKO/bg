import React from "react";
import styles from "./CartContent.module.css";
import { useSelector } from "react-redux";

const CartContent = () => {
  const cartItems = useSelector((state) => state.user.cart.cartItems);

  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => (
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
      ))}
    </div>
  );
};

export default CartContent;
