import type { INews } from "@/entities/news";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo.ts";
import { Image } from "@/shared/ui/Image/Image.tsx";
import s from "./NewsCard.module.css";

interface Props {
  item: INews;
  type: "banner" | "item";
}

export const NewsCard = ({ item, type = "item" }: Props) => {
  const publishedTime = formatTimeAgo(item.published);
  return (
    <li className={`${s.card} ${type === "banner" && s.banner}`} key={item.id}>
      {type === "banner" ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={s.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}

      <div className={s.info}>
        <h3 className={s.title}>{item.title}</h3>
        <p className={s.extra}>
          {publishedTime} by {item.author}
        </p>
      </div>
    </li>
  );
};
