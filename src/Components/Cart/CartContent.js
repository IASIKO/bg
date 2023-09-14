import React from "react";
import { useSelector } from "react-redux";

const CartContent = () => {
  const cartItems = useSelector((state) => state.user.cart.cartItems);

  console.log(cartItems);

  return (
    <div>
      {cartItems.map((item) => (
        <React.Fragment key={item.product._id}>
          <img src={item.product.image} alt={item.product.name} />
          <h1>{item.product.name}</h1>
          <p>
            {item.product.quantity} x $ {item.product.price}
          </p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CartContent;
