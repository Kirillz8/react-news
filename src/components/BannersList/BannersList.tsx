import { withSkeleton } from "../helpers/hocs/withSkeleton.tsx";
import NewsBanner from "../NewsBanner/NewsBanner.tsx";
import s from "./BannersList.module.css";

const BannersList = ({ banners }) => {
  return (
    <ul className={s.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
