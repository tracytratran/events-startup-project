import { Link, useNavigate } from "react-router-dom";
import hyfLogo from "../../assets/hyf.svg";
import { useAuth } from "../../context/AuthContext.jsx";
import { useCart } from "../../context/CartContext.jsx";
import MobileMenu from "../Menu/MobileMenu.jsx";
import WebMenu from "../Menu/WebMenu.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const { user, logout } = useAuth();
  const { ticketsCount } = useCart();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <img
            src={hyfLogo}
            alt="HackYourFuture logo"
            className={styles.logo}
          />
        </Link>

        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/events" className={styles.navLink}>
            Events
          </Link>
        </div>

        <WebMenu
          user={user}
          onLogout={handleLogout}
          ticketsCount={ticketsCount}
        />

        <MobileMenu
          user={user}
          onLogout={handleLogout}
          ticketsCount={ticketsCount}
        />
      </nav>
    </header>
  );
}
