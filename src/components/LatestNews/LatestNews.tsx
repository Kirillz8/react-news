import BannersList from "../BannersList/BannersList.tsx";
import s from "./LatestNews.module.css";

export const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={s.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};
