import type { INews } from "@/entities/news";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo.ts";
import { Image } from "@/shared/ui/Image/Image.tsx";
import s from "./NewsBanner.module.css";

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={s.banner}>
      <Image image={item?.image} />
      <h3 className={s.title}>{item?.title}</h3>
      <p className={s.extra}>
        {formatTimeAgo(item?.published)} by {item?.author}
      </p>
    </div>
  );
};

export default NewsBanner;
