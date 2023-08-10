import React from "react";
import MyAccount from "./My-account/MyAccount";
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
