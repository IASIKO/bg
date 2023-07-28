import React from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <form className={styles.form}>
        <h1>Login</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={styles.actions}>
          <Link to="/register">
            <p>Don't have an account? Sign Up here.</p>
          </Link>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
