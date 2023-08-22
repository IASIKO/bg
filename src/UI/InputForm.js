import React from "react";
import styles from "./InputForm.module.css";

const InputForm = ({ name, label, value, onChange, error }) => {
  return (
    <p className={styles.form}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        required
        type={name === "price" ? "number" : name === "password" ? "password" : "text"}
        min={name === "price" ? 0 : undefined}
      />
      {error && <span>{error}</span>}
    </p>
  );
};

export default InputForm;
