import {
  getCategories,
  getNews,
  type GetNewsParams,
} from "../../api/apiNews.ts";
import { Categories } from "../../components/Categories/Categories.tsx";
import { useDebounce } from "../../components/helpers/hooks/useDebounce.ts";
import { useFetch } from "../../components/helpers/hooks/useFetch.ts";
import { useFilters } from "../../components/helpers/hooks/useFilters.ts";
import NewsBanner from "../../components/NewsBanner/NewsBanner.tsx";
import { NewsListWithSkeleton } from "../../components/NewsList/NewsList.tsx";
import { Pagination } from "../../components/Pagination/Pagination.tsx";
import { Search } from "../../components/Search/Search.tsx";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants.ts";
import s from "./Main.module.css";

export type NewsType = {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  language: string;
  category: string[];
  published: string;
};

export type NewsResponse = {
  news: NewsType[];
  page: number;
  status: string;
  categories: string[];
  keywords: string;
};

export const Main = () => {
  const { filters, changeFilters } = useFilters({
    pageNumber: 1,
    pageSize: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsResponse, GetNewsParams>(
    // @ts-ignore
    getNews,
    {
      ...filters,
      keywords: debouncedKeywords,
    },
  );

  const { data: dataCategories } = useFetch(getCategories);

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
    <main className={s.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            changeFilters("category", category)
          }
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />
      <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />
    </main>
  );
};
