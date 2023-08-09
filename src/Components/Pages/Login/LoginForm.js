import React from "react";
import styles from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useForm from "../../../application/hooks/useForm";
import { authanticateUser } from "../../../redux/slices/userSlice";
import InputForm from "../../../UI/InputForm";
// import useForm from "../../../../application/hooks/useForm";
// import InputForm from "../../../../UI/InputForm";
// import { authanticateUser } from "../../../../redux/slices/userSlice";

const generateLoginFormValues = () => {
  return {
    email: {
      value: "",
      required: true,
      error: "",
      validateInput: (email) =>
        email.includes("gmail.com") ? null : "email is not valid",
    },
    password: {
      value: "",
      required: true,
      error: "",
      validateInput: (password) =>
        password.length > 6
          ? null
          : "password should have at least 6 characters",
    },
  };
};

const LoginForm = () => {
  const { formValues: loginFormValues, onInputChange } = useForm({
    defaultFormValues: generateLoginFormValues(),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLoginHandler = (event) => {
    event.preventDefault();

    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;

    dispatch(
      authanticateUser({ formValues: { email, password }, isLogin: true })
    );
    navigate("/my-account");
  };
  return (
    <>
      <form className={styles.form} onSubmit={onLoginHandler}>
        <h1>Login</h1>
        <InputForm
          name="email"
          label="Email"
          value={loginFormValues.email.value}
          onChange={onInputChange}
          error={loginFormValues.email.error}
          helpertext={loginFormValues.email.error}
        />
        <InputForm
          name="password"
          label="Password"
          value={loginFormValues.password.value}
          onChange={onInputChange}
          error={loginFormValues.password.error}
          helpertext={loginFormValues.password.error}
        />
        <div className={styles.actions}>
          <Link to="/register">Don't have an account? Sign Up here.</Link>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
