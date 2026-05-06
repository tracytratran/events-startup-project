// TODO: build a register form with relevant fields
// TODO: call register(email, password) from useAuth() on submit
// TODO: show a clear error message if registration fails
// TODO: redirect to the event list on success

// TODO: build a login form with relevant fields
// TODO: call login(email, password) from useAuth() on submit
// TODO: show a clear error message if login fails
// TODO: redirect to the event list on success
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import FormField from "../FormField/FormField";
import { EmailInput, PasswordInput } from "../Input/Input";
import Footer from "../Layout/Footer";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

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
        <h1 className={styles.formTitle}>Register here</h1>
        <hr className={styles.divider} />

        <FormField name="email" label="Email">
          <EmailInput
            name="email"
            handleOnChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <FormField name="password" label="Password">
          <PasswordInput
            name="password"
            handleOnChange={(e) => setPassword(e.target.value)}
          />
        </FormField>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <button type="submit" className={styles.registerBtn}>
          Register
        </button>
      </form>
      <Footer />
    </div>
  );
}
