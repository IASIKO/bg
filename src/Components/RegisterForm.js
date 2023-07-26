import React from "react";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <>
      <form className={styles.form}>
        <h1>Create a new user</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={styles.actions}>
          <button>Save</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
