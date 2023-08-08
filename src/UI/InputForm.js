import React from "react";
import styles from "./InputForm.module.css";

const InputForm = ({name, label, value, onChange, error}) => {
  return (
    <p className={styles.form}>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type={name}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        // error={!error}
        helpertext={error}
        required
      />
    </p>
  );
};

export default InputForm;
