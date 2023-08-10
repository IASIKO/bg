import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userInfo = useSelector((state) => state.user.user.userData);

  return (
    <div>
      <p>Hello {userInfo?.firstName}</p>
    </div>
  );
};

export default Dashboard;
