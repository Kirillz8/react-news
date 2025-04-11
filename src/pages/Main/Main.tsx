import { getNews, type GetNewsParams } from "../../api/apiNews.ts";
import { useDebounce } from "../../components/helpers/hooks/useDebounce.ts";
import { useFetch } from "../../components/helpers/hooks/useFetch.ts";
import { useFilters } from "../../components/helpers/hooks/useFilters.ts";
import { LatestNews } from "../../components/LatestNews/LatestNews.tsx";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters.tsx";
import { PAGE_SIZE } from "../../constants/constants.ts";
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

  return (
    <main className={s.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />

      <NewsByFilters
        news={data?.news}
        isLoading={isLoading}
        filters={filters}
        changeFilters={changeFilters}
      />
    </main>
  );
};
