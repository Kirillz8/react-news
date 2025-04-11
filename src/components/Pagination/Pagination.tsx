import s from "./Pagination.module.css";

export const Pagination = ({
  totalPages,
  handlePreviousPage,
  handlePageClick,
  handleNextPage,
  currentPage,
}) => {
  return (
    <div className={s.pagination}>
      <button
        className={s.arrow}
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={s.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              className={s.pageNumber}
              key={index}
              onClick={() => handlePageClick(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={s.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};
