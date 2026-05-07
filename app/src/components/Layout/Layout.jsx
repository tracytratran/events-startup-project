import { Link, Outlet } from "react-router-dom";
import hyfLogo from "../../assets/hyf.svg";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
