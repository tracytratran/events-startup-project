import styles from "./SortBar.module.css";

export default function SortBar() {
  return (
    <div className={styles.sortBar}>
      <span className={styles.sortLabel}>Sort by:</span>
      <div className={styles.sortSelectWrapper}>
        <select className={styles.sortSelect}>
          <option>Default</option>
          <option>Date: Soonest</option>
          <option>Date: Latest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
