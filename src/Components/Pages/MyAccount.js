import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
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
        <div>
          <p>Hello {userInfo.firstName}</p>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default MyAccount;
