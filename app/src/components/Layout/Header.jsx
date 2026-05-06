import { Link } from "react-router-dom";
import hyfLogo from "../../assets/hyf.svg";
import { useAuth } from "../../context/AuthContext.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="https://www.hackyourfuture.dk/" target="_blank">
          <img
            src={hyfLogo}
            alt="HackYourFuture logo"
            className={styles.logo}
          />
        </a>

        {/* Navigation links go here — e.g. link to event list, cart, login */}
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/events" className={styles.navLink}>
            Events
          </Link>
        </div>

        <div className={styles.actions}>
          {user ? (
            <>
              <span className={styles.user}>{user.email}</span>
              <button onClick={logout} className={styles.signoutBtn}>
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.navLink}>
                Login
              </Link>
              <Link to="/register" className={styles.registerBtn}>
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
