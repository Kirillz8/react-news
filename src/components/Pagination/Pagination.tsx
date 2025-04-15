import { useTheme } from "../../context/ThemeContext.tsx";
import type { IPaginationProps } from "../../interfaces";
import s from "./Pagination.module.css";

export const Pagination = ({
  totalPages,
  handlePreviousPage,
  handlePageClick,
  handleNextPage,
  currentPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`${s.pagination} ${isDark ? s.dark : s.light}`}>
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
