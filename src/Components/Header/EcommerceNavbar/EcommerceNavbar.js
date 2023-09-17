import React, { useState } from "react";
import styles from "./EcommerceNavbar.module.css";
import { ImCart } from "react-icons/im";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartDrawer from "../../Cart/CartDrawer";

const EcommerceNavbar = () => {
  const userInfo = useSelector((state) => state.user.user.userData);
  const cartItems = useSelector((state) => state.user.cart.cartItems);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div className={styles.eContainer}>
        <div>
          <i>
            <FaRegHeart />
          </i>
        </div>
        {!userInfo ? (
          <div>
            <Link to="/login">
              <i>
                <RxPerson />
              </i>
            </Link>
          </div>
        ) : (
          <Link to="/my-account">
            <i>
              <RxPerson />
            </i>
          </Link>
        )}
        <div className={styles.cartIcon} onClick={() => setIsCartOpen(true)}>
          <i>
            <ImCart />
            <span>{totalQuantity}</span>
          </i>
        </div>
      </div>
      {isCartOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
      <CartDrawer isOpen={isCartOpen} isClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default EcommerceNavbar;
