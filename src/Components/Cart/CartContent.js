import React from "react";
import styles from "./CartContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import Total from "./Total";
import { TiDeleteOutline } from "react-icons/ti";
import { clearCart } from "../../redux/slices/cartSlice";

const CartContent = () => {
  const cartItems = useSelector((state) => state.user.cart.cartItems);
  const dispatch = useDispatch();

  const isProductInCart = cartItems.length > 0;

  const deleteItemHandler = (id) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product._id !== id
    );

    dispatch(clearCart(updatedCartItems));
  };

  const onOrderClickHandler = () => {
    dispatch(clearCart([]));
    console.log("Order sucssesful");
  };

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
                <i onClick={() => deleteItemHandler(item.product._id)}>
                  <TiDeleteOutline />
                </i>
              </p>
            </div>
            <hr />
          </React.Fragment>
        ))
      ) : (
        <p className={styles.empty}>No products in the cart.</p>
      )}
      {isProductInCart && (
        <div className={styles.subtotal}>
          Subtotal: <Total cartItems={cartItems} /> ₾
          <hr />
          <button onClick={onOrderClickHandler}>Order</button>
        </div>
      )}
    </div>
  );
};

export default CartContent;
