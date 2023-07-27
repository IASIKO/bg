import React, { useEffect } from "react";
import RegisterForm from "../RegisterForm";

const Register = () => {
  // const [userData, setUserData] = useState([]);


  const addUser = (userData) => {
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    addUser();
  }, []);

  return (
    <>
      <RegisterForm onAddUser={addUser} />
    </>
  );
};

export default Register;
