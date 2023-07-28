import React, { useRef, useState } from "react";
import styles from "./RegisterForm.module.css";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState();
  const [enteredLastName, setEnteredLastName] = useState();
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();

  const firstNameInputChangeHandler = () => {
    setEnteredFirstName(firstNameRef.current.value);
  };

  const lastNameInputChangeHandler = () => {
    setEnteredLastName(lastNameRef.current.value);
  };

  const emailInputChangeHandler = () => {
    setEnteredEmail(emailRef.current.value);
  };

  const passwordInputChangeHandler = () => {
    setEnteredPassword(passwordRef.current.value);
  };

  const registerFormSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };
    props.onAddUser(userData);
    navigate("/");
  };

  return (
    <>
      <form className={styles.form} onSubmit={registerFormSubmitHandler}>
        <h1>Create a new user</h1>
        <p>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="firstName"
            name="firstName"
            ref={firstNameRef}
            onChange={firstNameInputChangeHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="lastName"
            name="lastName"
            ref={lastNameRef}
            onChange={lastNameInputChangeHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={emailRef}
            onChange={emailInputChangeHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
            onChange={passwordInputChangeHandler}
            required
          />
        </p>
        <div className={styles.actions}>
          <Link to="/login">Already have an account? Login here.</Link>
          <button>Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
