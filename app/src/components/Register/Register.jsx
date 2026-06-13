import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import FormField from "../FormField/FormField";
import EmailInput from "../Input/EmailInput";
import PasswordInput from "../Input/PasswordInput";
import styles from "./Register.module.css";

export default function Register() {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.registerForm} onSubmit={handleOnSubmit}>
        <h1 className={styles.title}>Register here</h1>
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

        <button type="submit" className={styles.registerBtn}>
          Register
        </button>
      </form>
    </div>
  );
}
