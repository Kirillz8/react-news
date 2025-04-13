import { getNews } from "../../api/apiNews.ts";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants.ts";
import { useDebounce } from "../../helpers/hooks/useDebounce.ts";
import { useFetch } from "../../helpers/hooks/useFetch.ts";
import { useFilters } from "../../helpers/hooks/useFilters.ts";
import type { NewsApiResponse, ParamsType } from "../../interfaces";
import { NewsFilters } from "../NewsFilters/NewsFilters.tsx";
import NewsList from "../NewsList/NewsList.tsx";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper.tsx";
import s from "./NewsByFilters.module.css";

export const NewsByFilters = () => {
  const { filters, changeFilters } = useFilters({
    pageNumber: 1,
    pageSize: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

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

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};
