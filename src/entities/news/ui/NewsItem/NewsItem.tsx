import type { INews } from "@/entities/news";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo.ts";
import s from "./NewsItem.module.css";

interface Props {
  item: INews;
}

export const NewsItem = ({ item }: Props) => {
  const publishedTime = formatTimeAgo(item.published);
  return (
    <li className={s.item} key={item.id}>
      <div
        className={s.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={s.info}>
        <h3 className={s.title}>{item.title}</h3>
        <p className={s.extra}>
          {publishedTime} by {item.author}
        </p>
      </div>
    </li>
  );
};
