import type { INews } from "@/entities/news";
import { NewsCard } from "@/entities/news/ui/NewsCard/NewsCard.tsx";
import { withSkeleton } from "@/shared/hocs/withSkeleton.tsx";
import s from "./NewsList.module.css";

export interface NewsProps {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
}

const NewsList = ({ news, type = "item" }: NewsProps) => {
  return (
    <ul className={`${type === "item" ? s.items : s.banners}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<NewsProps>(NewsList, 10);

export default NewsListWithSkeleton;
