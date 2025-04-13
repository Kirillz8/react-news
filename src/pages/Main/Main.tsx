import { LatestNews } from "../../components/LatestNews/LatestNews.tsx";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters.tsx";
import s from "./Main.module.css";

export const Main = () => {
  return (
    <main className={s.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};
