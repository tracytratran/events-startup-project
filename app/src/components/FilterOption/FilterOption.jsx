import styles from "./FilterOption.module.css";

export default function FilterOption({ filterTitle, filterOptions }) {
  return (
    <>
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>{filterTitle}</h3>
        <div className={styles.filterOptions}>
          {filterOptions.map((label) => (
            <label key={label} className={styles.filterOption}>
              <input type="checkbox" />
              <span className={styles.filterLabel}>{label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
