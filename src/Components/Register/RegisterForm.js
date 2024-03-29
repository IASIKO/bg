import React from "react";
import styles from "./RegisterForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../../UI/InputForm";
import useForm from "../../application/hooks/useForm";
import { useDispatch } from "react-redux";
import { authanticateUser } from "../../redux/slices/userSlice";

const generateRegisterFormValues = () => {
  return {
    firstName: {
      value: "",
      required: true,
      error: "",
      validateInput: (name) =>
        name.length > 3 ? null : "name should have at least 3 characters",
    },
    lastName: {
      value: "",
      required: true,
      error: "",
      validateInput: (lastName) =>
        lastName.length > 3
          ? null
          : "last name should have at least 3 characters",
    },
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

const RegisterForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerFormSubmitHandler = (event) => {
    event.preventDefault();

    const firstName = formValues.firstName.value;
    const lastName = formValues.lastName.value;
    const email = formValues.email.value;
    const password = formValues.password.value;

    dispatch(
      authanticateUser({
        formValues: { firstName, lastName, email, password },
        isLogin: false,
      })
    );

    navigate("/my-account");
  };

  const { formValues, onInputChange } = useForm({
    defaultFormValues: generateRegisterFormValues(),
  });

  return (
    <>
      <form className={styles.form} onSubmit={registerFormSubmitHandler}>
        <h1>Create a new user</h1>
        <InputForm
          name="firstName"
          label="FirstName"
          value={formValues.firstName.value}
          onChange={onInputChange}
          error={formValues.firstName.error}
        />
        <InputForm
          name="lastName"
          label="LastName"
          value={formValues.lastName.value}
          onChange={onInputChange}
          error={formValues.lastName.error}
        />
        <InputForm
          name="email"
          label="Email"
          value={formValues.email.value}
          onChange={onInputChange}
          error={formValues.email.error}
        />
        <InputForm
          name="password"
          label="Password"
          value={formValues.password.value}
          onChange={onInputChange}
          error={formValues.password.error}
        />
        <div className={styles.actions}>
          <Link to="/login">Already have an account? Login here.</Link>
          <button>Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
