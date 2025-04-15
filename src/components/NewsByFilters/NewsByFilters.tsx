import { TOTAL_PAGES } from "../../constants/constants.ts";
import { useDebounce } from "../../helpers/hooks/useDebounce.ts";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsQuery } from "../../store/services/newsApi.ts";
import { getFilters } from "../../store/slices/newsSlice.ts";
import { NewsFilters } from "../NewsFilters/NewsFilters.tsx";
import NewsList from "../NewsList/NewsList.tsx";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper.tsx";
import s from "./NewsByFilters.module.css";

export const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const dispatch = useAppDispatch();

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.pageNumber < TOTAL_PAGES) {
      dispatch(
        getFilters({ key: "pageNumber", value: filters.pageNumber + 1 }),
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.pageNumber > 1) {
      dispatch(
        getFilters({ key: "pageNumber", value: filters.pageNumber - 1 }),
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(getFilters({ key: "pageNumber", value: pageNumber }));
  };

  return (
    <section className={s.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
};
