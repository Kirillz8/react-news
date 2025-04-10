import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews.ts";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner.tsx";
import { NewsList } from "../../components/NewsList/NewsList.tsx";
import { Skeleton } from "../../components/Skeleton/Skeleton.tsx";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response: NewsResponse = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={s.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
    </main>
  );
};
