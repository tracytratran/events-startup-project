import styles from "./SortBar.module.css";

export default function SortBar({ onChange }) {
  return (
    <div className={styles.sortBar}>
      <span className={styles.sortLabel}>Sort by:</span>
      <div className={styles.sortSelectWrapper}>
        <select onChange={onChange} className={styles.sortSelect}>
          <option value="default">Default</option>
          <option value="soonest">Date: Soonest</option>
          <option value="latest">Date: Latest</option>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
