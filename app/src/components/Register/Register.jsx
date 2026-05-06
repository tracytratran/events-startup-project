// TODO: build a register form with relevant fields
// TODO: call register(email, password) from useAuth() on submit
// TODO: show a clear error message if registration fails
// TODO: redirect to the event list on success

// TODO: build a login form with relevant fields
// TODO: call login(email, password) from useAuth() on submit
// TODO: show a clear error message if login fails
// TODO: redirect to the event list on success
import FormField from "../FormField/FormField";
import { EmailInput, PasswordInput } from "../Input/Input";
import Footer from "../Layout/Footer";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.registerForm}>
        <h1 className={styles.formTitle}>Register here</h1>
        <hr className={styles.divider} />

        <FormField name="email" label="Email">
          <EmailInput name="email" />
        </FormField>

        <FormField name="password" label="Password">
          <PasswordInput name="password" />
        </FormField>

        <button type="submit" className={styles.registerBtn}>
          Register
        </button>
      </form>
      <Footer />
    </div>
  );
}
