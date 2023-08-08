import React from "react";
import styles from "./RegisterForm.module.css";
import { Link } from "react-router-dom";
import InputForm from "../../UI/InputForm";
import useForm from "../../application/hooks/useForm";

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
  // const [enteredFirstName, setEnteredFirstName] = useState();
  // const [enteredLastName, setEnteredLastName] = useState();
  // const [enteredEmail, setEnteredEmail] = useState();
  // const [enteredPassword, setEnteredPassword] = useState();

  // const firstNameRef = useRef("");
  // const lastNameRef = useRef("");
  // const emailRef = useRef("");
  // const passwordRef = useRef("");

  // const navigate = useNavigate();

  // const firstNameInputChangeHandler = () => {
  //   setEnteredFirstName(firstNameRef.current.value);
  // };

  // const lastNameInputChangeHandler = () => {
  //   setEnteredLastName(lastNameRef.current.value);
  // };

  // const emailInputChangeHandler = () => {
  //   setEnteredEmail(emailRef.current.value);
  // };

  // const passwordInputChangeHandler = () => {
  //   setEnteredPassword(passwordRef.current.value);
  // };

  // const registerFormSubmitHandler = (event) => {
  //   event.preventDefault();
  //   const userData = {
  //     firstName: enteredFirstName,
  //     lastName: enteredLastName,
  //     email: enteredEmail,
  //     password: enteredPassword,
  //   };
  //   props.onAddUser(userData);
  //   navigate("/");
  // };

  const { formValues, onInputChange } = useForm({
    defaultFormValues: generateRegisterFormValues(),
  });

  return (
    <>
      <form className={styles.form}>
        <h1>Create a new user</h1>

        <InputForm
          name="firstName"
          label="FirstName"
          value={formValues.firstName.value}
          onChange={onInputChange}
          error={!!formValues.firstName.error}
          helpertext={formValues.firstName.error}
        />
        <InputForm
          name="lastName"
          label="LastName"
          value={formValues.lastName.value}
          onChange={onInputChange}
          error={!!formValues.lastName.error}
          helpertext={formValues.lastName.error}
        />
        <InputForm
          name="email"
          label="Email"
          value={formValues.email.value}
          onChange={onInputChange}
          error={!!formValues.email.error}
          helpertext={formValues.email.error}
        />
        <InputForm
          name="password"
          label="Password"
          value={formValues.password.value}
          onChange={onInputChange}
          error={!!formValues.password.error}
          helpertext={formValues.password.error}
        />
        {/* <p>
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
        </p> */}
        <div className={styles.actions}>
          <Link to="/login">Already have an account? Login here.</Link>
          <button>Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
