import { getLatestNews, type GetNewsParams } from "../../api/apiNews.ts";
import type { NewsResponse } from "../../pages/Main/Main.tsx";
import BannersList from "../BannersList/BannersList.tsx";
import { useFetch } from "../helpers/hooks/useFetch.ts";
import s from "./LatestNews.module.css";

export const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsResponse, GetNewsParams>(
    getLatestNews,
  );
  return (
    <section className={s.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};
