import { formatTimeAgo } from "../helpers/formatTimeAgo.ts";
import type { NewsType } from "../../pages/Main/Main.tsx";
import { withSkeleton } from "../helpers/hocs/withSkeleton.tsx";
import { Image } from "../Image/Image.tsx";
import s from "./NewsBanner.module.css";

export type ItemProps = {
  item: NewsType;
  isLoading: boolean;
};

const NewsBanner = ({ item }: ItemProps) => {
  return (
    <div className={s.banner}>
      <Image image={item?.image} />
      <h3 className={s.title}>{item.title}</h3>
      <p className={s.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
