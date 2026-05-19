import styles from "./Input.module.css";

export default function PasswordInput({ name, value, handleOnChange }) {
  return (
    <input
      type="password"
      id={name}
      name={name}
      value={value}
      placeholder="••••••••"
      minlength="8"
      maxlength="64"
      pattern="(?=.*[A-Z])(?=.*[0-9]).{8,}"
      title="At least 8 characters, one uppercase letter, and one number"
      onChange={handleOnChange}
      required
      className={styles.input}
    />
  );
}
