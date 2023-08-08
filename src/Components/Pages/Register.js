import React, { useState } from "react";
import RegisterForm from "../Register/RegisterForm";

const Register = () => {
  // const [usersData, setUsersData] = useState([]);

  // const addUser = (userData) => {
  //   fetch("http://localhost:3001/users/register", {
  //     method: "POST",
  //     body: JSON.stringify(userData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   setUsersData((prevUsersState) => [userData, ...prevUsersState]);
  // };

  return (
    <>
      <RegisterForm />
    </>
  );
};

export default Register;
