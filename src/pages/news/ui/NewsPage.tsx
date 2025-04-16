import { useAppSelector } from "@/app/appStore.ts";
import { NewsDetails } from "@/entities/news";
import { Link } from "react-router-dom";
import s from "./NewsPage.module.css";

export const NewsPage = () => {
  const currentNews = useAppSelector((state) => state.news.currentNews);

  if (!currentNews) {
    return (
      <div>
        <h1>Cannot find news</h1>
        <Link to={"/"}>
          <h3>Go to main page</h3>
        </Link>
      </div>
    );
  }

  return (
    <main className={s.news}>
      <h1>{currentNews.title}</h1>

      <NewsDetails item={currentNews} />
    </main>
  );
};
