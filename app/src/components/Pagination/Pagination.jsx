import styles from "./Pagination.module.css";

export default function Pagination({
  eventsPerPage,
  totalEvents,
  setCurrentPage,
  currentPage,
}) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <nav className={styles.pagination}>
      <button
        className={styles.arrowBtn}
        onClick={(e) => paginate(currentPage - 1, e)}
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
            <a
              onClick={(e) => paginate(number, e)}
              href="!#"
              className={`${styles.pageNumber} ${currentPage === number ? styles.active : ""}`}
              aria-current={currentPage === number ? "page" : undefined}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.arrowBtn}
        onClick={(e) => paginate(currentPage + 1, e)}
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
