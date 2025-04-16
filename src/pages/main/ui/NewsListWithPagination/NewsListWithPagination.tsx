import type { INews } from "@/entities/news";
import { Pagination } from "@/features/pagination/ui/Pagination/Pagination.tsx";
import { usePaginationNews } from "@/pages/main/utils/hooks/usePaginationNews.ts";
import { TOTAL_PAGES } from "@/shared/constants/constants.ts";
import type { IFilters } from "@/shared/interfaces";
import { NewsList } from "@/widgets/news/ui/index.ts";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

export const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.pageNumber}
    >
      <NewsList
        type={"item"}
        direction={"column"}
        isLoading={isLoading}
        news={news}
      />
    </Pagination>
  );
};
