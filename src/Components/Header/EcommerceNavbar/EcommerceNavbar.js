import React from "react";
import styles from "./EcommerceNavbar.module.css";
import { ImCart } from "react-icons/im";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EcommerceNavbar = () => {
  const userInfo = useSelector((state) => state.user.user.userData);

  console.log(userInfo);

  return (
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
        <div>{userInfo.firstName}</div>
      )}
      <div className={styles.cartIcon}>
        <i>
          <ImCart />
          <span>0</span>
        </i>
      </div>
    </div>
  );
};

export default EcommerceNavbar;
