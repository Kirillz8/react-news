import { useTheme } from "@/app/providers/ThemeProvider.tsx";
import type { IPaginationProps } from "@/features/pagination/model/types.ts";
import s from "./PaginationButtons.module.css";

export const PaginationButtons = ({
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
