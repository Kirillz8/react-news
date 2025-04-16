import type { INews } from "@/entities/news";
import { withSkeleton } from "@/shared/hocs/withSkeleton.tsx";
import { NewsItem } from "@/entities/news/ui/NewsItem/NewsItem.tsx";
import s from "./NewsList.module.css";

export interface NewsProps {
  news?: INews[];
}

const NewsList = ({ news }: NewsProps) => {
  return (
    <ul className={s.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<NewsProps>(NewsList, "item", 10);

export default NewsListWithSkeleton;
