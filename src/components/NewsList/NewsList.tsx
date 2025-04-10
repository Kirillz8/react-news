import type { NewsResponse } from "../../pages/Main/Main.tsx";
import { NewsItem } from "../NewsItem/NewsItem.tsx";
import s from "./NewsList.module.css";

type newsProps = Pick<NewsResponse, "news">;

export const NewsList = ({ news }: newsProps) => {
  return (
    <ul className={s.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
