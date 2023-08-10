import React from "react";
import styles from "./MyAccount.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/slices/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import LoginForm from "../Login/LoginForm";

const MyAccount = () => {
  const userInfo = useSelector((state) => state.user.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <>
      {userInfo ? (
        <div className={styles.myAccountContainer}>
          <h1 className={styles.myAccountTitle}>My account</h1>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/my-account/orders"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Orders
          </NavLink>
          <NavLink
            to="/my-account/addresses"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Addresses
          </NavLink>
          <NavLink
            to="/my-account/account-details"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Acount details
          </NavLink>
          <NavLink
            to="/login"
            onClick={logoutHandler}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Logout
          </NavLink>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default MyAccount;
