import s from "./Pagination.module.css";

type totalPagesProps = {
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (pageNumber: number) => void;
  currentPage: number;
};

export const Pagination = ({
  totalPages,
  handlePreviousPage,
  handlePageClick,
  handleNextPage,
  currentPage,
}: totalPagesProps) => {
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
