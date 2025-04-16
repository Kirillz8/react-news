import { LatestNews } from "@/pages/main/ui/LatestNews/LatestNews.tsx";
import { NewsByFilters } from "@/pages/main/ui/NewsByFilters/NewsByFilters.tsx";
import s from "./Main.module.css";

export const MainPage = () => {
  return (
    <main className={s.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};
