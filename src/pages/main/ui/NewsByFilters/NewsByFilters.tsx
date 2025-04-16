import { useAppSelector } from "@/app/appStore.ts";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi.ts";
import { useGetNewsQuery } from "@/entities/news/api/newsApi.ts";
import { NewsListWithPagination } from "@/pages/main/ui/NewsListWithPagination/NewsListWithPagination.tsx";
import { useDebounce } from "@/shared/hooks/useDebounce.ts";
import { NewsFilters } from "@/widgets/news/ui/index.ts";

import s from "./NewsByFilters.module.css";

export const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data } = useGetCategoriesQuery();

  return (
    <section className={s.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        isLoading={isLoading}
        filters={filters}
        news={news}
      />
    </section>
  );
};
