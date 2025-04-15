import { useGetLatestNewsQuery } from "../../store/services/newsApi.ts";
import BannersList from "../BannersList/BannersList.tsx";
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
