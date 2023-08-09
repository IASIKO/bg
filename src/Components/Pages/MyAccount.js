import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import LoginForm from "./Login/LoginForm";

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
        <div >
          <h1>My account</h1>
          <NavLink to="/my-account">Dashboard</NavLink>
          <NavLink to="/my-account/orders">Orders</NavLink>
          <NavLink to="/my-account/addresses">Addresses</NavLink>
          <NavLink to="/my-account/account-details">Acount details</NavLink>
          <NavLink to="/login">
            <button onClick={logoutHandler}>Logout</button>
          </NavLink>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default MyAccount;
