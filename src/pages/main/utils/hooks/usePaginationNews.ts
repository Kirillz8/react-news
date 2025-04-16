import { useAppDispatch } from "@/app/appStore.ts";
import { getFilters } from "@/entities/news/model/newsSlice.ts";
import { TOTAL_PAGES } from "@/shared/constants/constants.ts";
import type { IFilters } from "@/shared/interfaces";

export const usePaginationNews = (filters: IFilters) => {
  const dispatch = useAppDispatch();

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

  return { handleNextPage, handlePreviousPage, handlePageClick };
};
