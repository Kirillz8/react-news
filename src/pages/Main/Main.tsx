import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews.ts";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner.tsx";
import { NewsList } from "../../components/NewsList/NewsList.tsx";
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
};

export const Main = () => {
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response: NewsResponse = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={s.main}>
      {news.length > 0 && <NewsBanner item={news[0]} />}
      <NewsList news={news} />
    </main>
  );
};
