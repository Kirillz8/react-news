import type { NewsResponse } from "../../pages/Main/Main.tsx";
import { withSkeleton } from "../helpers/hocs/withSkeleton.tsx";
import { NewsItem } from "../NewsItem/NewsItem.tsx";
import s from "./NewsList.module.css";

type newsProps = Pick<NewsResponse, "news"> & { isLoading: boolean };

const NewsList = ({ news }: newsProps) => {
  return (
    <ul className={s.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export const NewsListWithSkeleton = withSkeleton(
  NewsList,
  "item",
  10,
  "column",
);

export default NewsListWithSkeleton;
