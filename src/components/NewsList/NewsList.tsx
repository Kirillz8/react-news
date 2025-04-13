import { withSkeleton } from "../../helpers/hocs/withSkeleton.tsx";
import type { INews } from "../../interfaces";
import { NewsItem } from "../NewsItem/NewsItem.tsx";
import s from "./NewsList.module.css";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={s.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
