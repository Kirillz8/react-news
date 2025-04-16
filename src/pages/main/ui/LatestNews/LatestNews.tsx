import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi.ts";
import { BannersList } from "@/widgets/news/ui/index.ts";
import s from "./LatestNews.module.css";

export const LatestNews = () => {
  // const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
  const { data, isLoading } = useGetLatestNewsQuery();

  return (
    <section className={s.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};
