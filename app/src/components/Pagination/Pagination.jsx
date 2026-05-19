import styles from "./Pagination.module.css";

export default function Pagination({
  eventsPerPage,
  totalEvents,
  setCurrentPage,
  currentPage,
}) {
  const totalPages = Math.ceil(totalEvents / eventsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (totalPages <= 0) return null;

  return (
    <nav className={styles.pagination}>
      <button
        type="button"
        className={styles.arrowBtn}
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <ul className={styles.paginationList}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              type="button"
              onClick={() => paginate(number)}
              className={`${styles.pageNumber} ${currentPage === number ? styles.active : ""}`}
              aria-current={currentPage === number ? "page" : undefined}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={styles.arrowBtn}
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
}
