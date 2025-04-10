import { formatTimeAgo } from "../helpers/formatTimeAgo.ts";
import type { NewsType } from "../../pages/Main/Main.tsx";
import s from "./NewsItem.module.css";

export type ItemProps = {
  item: NewsType;
};

export const NewsItem = ({ item }: ItemProps) => {
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
