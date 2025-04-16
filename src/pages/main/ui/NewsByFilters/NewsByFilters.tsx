import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";
import { NewsFilters } from "@/pages/main/ui/NewsFilters/NewsFilters.tsx";
import { Pagination } from "@/features/pagination/ui/Pagination/Pagination.tsx";
import { TOTAL_PAGES } from "@/shared/constants/constants.ts";
import { useDebounce } from "@/shared/hooks/useDebounce.ts";
import { useGetNewsQuery } from "@/entities/news/api/newsApi.ts";
import { getFilters } from "@/entities/news/model/newsSlice.ts";
import { NewsList } from "@/widgets/news/ui/index.ts";

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

      <Pagination
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      >
        <NewsList isLoading={isLoading} news={news} />
      </Pagination>
    </section>
  );
};
