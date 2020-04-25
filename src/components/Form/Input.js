import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, name, placeholder, value, onChange, type }) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    {type === "text" ? (
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    ) : (
      <select
        className={styles.input}
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value={0}>Sales</option>
        <option value={1}>Support</option>
        <option value={2}>Accounting</option>
      </select>
    )}
  </div>
);

export default Input;
