import type { INews } from "@/entities/news";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo.ts";
import { Image } from "@/shared/ui/Image/Image.tsx";
import s from "./NewsDetails.module.css";

interface Props {
  item: INews;
}

export const NewsDetails = ({ item }: Props) => {
  const publishedTime = formatTimeAgo(item.published);
  return (
    <div className={s.details} key={item.id}>
      <Image image={item.image} />
      <div className={s.description}>
        <p>
          {item.description} ({item.language})
          <a target={"_blank"} href={item.url}>
            Read more
          </a>
        </p>
        <p className={s.extra}>
          {publishedTime} by {item.author}
        </p>
      </div>

      <ul>
        {item.category.map((category) => {
          return <button className={s.active}>{category}</button>;
        })}
      </ul>
    </div>
  );
};
