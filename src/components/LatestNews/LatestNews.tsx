import { getLatestNews } from "../../api/apiNews.ts";
import type { NewsApiResponse } from "../../interfaces";
import BannersList from "../BannersList/BannersList.tsx";
import { useFetch } from "../../helpers/hooks/useFetch.ts";
import s from "./LatestNews.module.css";

export const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);
  return (
    <section className={s.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};
