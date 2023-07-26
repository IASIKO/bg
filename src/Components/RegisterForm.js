import React from "react";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <>
      <form className={styles.form}>
        <h1>Create a new user</h1>
        <p>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="firstName" name="firstName" required />
        </p>
        <p>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="lastName" name="lastName" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={styles.actions}>
          <button>Register</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
