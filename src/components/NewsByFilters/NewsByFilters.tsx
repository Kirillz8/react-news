import { TOTAL_PAGES } from "../../constants/constants.ts";
import { NewsFilters } from "../NewsFilters/NewsFilters.tsx";
import NewsList from "../NewsList/NewsList.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import s from "./NewsByFilters.module.css";

export const NewsByFilters = ({ filters, changeFilters, isLoading, news }) => {
  const handleNextPage = () => {
    if (filters.pageNumber < TOTAL_PAGES) {
      changeFilters("pageNumber", filters.pageNumber + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.pageNumber > 1) {
      changeFilters("pageNumber", filters.pageNumber - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    changeFilters("pageNumber", pageNumber);
  };

  return (
    <section className={s.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />
      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />
    </section>
  );
};
