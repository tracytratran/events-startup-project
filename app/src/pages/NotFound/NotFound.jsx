import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.description}>
        The URL you entered doesn't match any page. It may have been moved,
        deleted, or you may have mistyped it.
      </p>
      <Link to={"/"} className={styles.homeLink}>
        Go to homepage
      </Link>
    </div>
  );
}
