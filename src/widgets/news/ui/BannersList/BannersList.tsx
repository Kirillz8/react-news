import type { INews } from "@/entities/news";
import { withSkeleton } from "@/shared/hocs/withSkeleton.tsx";
import NewsBanner from "@/entities/news/ui/NewsBanner/NewsBanner.tsx";
import s from "./BannersList.module.css";

export interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={s.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  10,
  "row",
);

export default BannersListWithSkeleton;
