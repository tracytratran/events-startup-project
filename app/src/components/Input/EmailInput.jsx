import styles from "./Input.module.css";

export default function EmailInput({ name, value, handleOnChange }) {
  return (
    <input
      type="email"
      id={name}
      name={name}
      value={value}
      placeholder="you@example.com"
      pattern="[a-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
      onChange={handleOnChange}
      required
      className={styles.input}
    />
  );
}
