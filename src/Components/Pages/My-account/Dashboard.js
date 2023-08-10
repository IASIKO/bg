import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userInfo = useSelector((state) => state.user.user.userData);

  const userFirstName =
    userInfo?.firstName.charAt(0).toUpperCase() + userInfo?.firstName.slice(1);

  return (
    <div>
      Hello
      <strong> {userFirstName}</strong>
      <p>
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses, and edit your password and account
        details.
      </p>
    </div>
  );
};

export default Dashboard;
