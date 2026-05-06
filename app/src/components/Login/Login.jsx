// TODO: build a login form with relevant fields
// TODO: call login(email, password) from useAuth() on submit
// TODO: show a clear error message if login fails
// TODO: redirect to the event list on success
import FormField from "../FormField/FormField";
import { EmailInput, PasswordInput } from "../Input/Input";
import Footer from "../Layout/Footer";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.loginForm}>
        <h1 className={styles.formTitle}>Login</h1>
        <p className={styles.subtitle}>Welcome back to HackYourFutureEvent</p>
        <hr className={styles.divider} />

        <FormField name="email" label="Email">
          <EmailInput name="email" />
        </FormField>

        <FormField name="password" label="Password">
          <PasswordInput name="password" />
        </FormField>

        <button type="submit" className={styles.loginBtn}>
          Login
        </button>

        <p className={styles.registerLink}>
          Not a member? <a href="/register">Register now</a>
        </p>
      </form>
      <Footer />
    </div>
  );
}
