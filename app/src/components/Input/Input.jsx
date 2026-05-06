import styles from "./Input.module.css";

export function EmailInput({ name }) {
  return (
    <input
      type="email"
      id={name}
      name={name}
      placeholder="you@example.com"
      pattern="[a-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
      required
      className={styles.input}
    />
  );
}

export function PasswordInput({ name }) {
  return (
    <input
      type="password"
      id={name}
      name={name}
      placeholder="••••••••"
      required
      className={styles.input}
    />
  );
}
