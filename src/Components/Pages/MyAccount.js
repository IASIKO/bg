import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/userSlice";

const MyAccount = () => {
  const userInfo = useSelector((state) => state.user.user.userData);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      {userInfo && (
        <div>
          <p>Hello {userInfo.firstName}</p>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
    </>
  );
};

export default MyAccount;
