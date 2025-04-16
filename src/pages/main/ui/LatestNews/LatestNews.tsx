import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi.ts";
import { NewsList } from "@/widgets/news/ui";
import s from "./LatestNews.module.css";

export const LatestNews = () => {
  // const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
  const { data, isLoading } = useGetLatestNewsQuery();

  return (
    <section className={s.section}>
      <NewsList
        type={"banner"}
        direction={"row"}
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};
