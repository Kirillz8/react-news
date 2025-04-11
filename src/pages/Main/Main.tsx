import { LatestNews } from "../../components/LatestNews/LatestNews.tsx";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters.tsx";
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
  return (
    <main className={s.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};
