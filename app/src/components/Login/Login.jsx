import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import FormField from "../FormField/FormField";
import EmailInput from "../Input/EmailInput";
import PasswordInput from "../Input/PasswordInput";
import styles from "./Login.module.css";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.loginForm} onSubmit={handleOnSubmit}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>Welcome back to HackYourFutureEvent</p>
        <hr className={styles.divider} />

        <FormField name="email" label="Email">
          <EmailInput
            name="email"
            value={email}
            handleOnChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <FormField name="password" label="Password">
          <PasswordInput
            name="password"
            value={password}
            handleOnChange={(e) => setPassword(e.target.value)}
          />
        </FormField>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <button type="submit" className={styles.loginBtn}>
          Login
        </button>

        <p className={styles.registerLink}>
          Not a member?
          <Link to={"/register"}>Register now</Link>
        </p>
      </form>
    </div>
  );
}
