import React from "react";
import MyAccount from "./MyAccount";
import { Outlet } from "react-router-dom";

const MyAccountLayout = () => {
  return (
    <>
      <MyAccount />
      <Outlet />
    </>
  );
};

export default MyAccountLayout;
