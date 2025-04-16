import { useAppDispatch } from "@/app/appStore.ts";
import type { INews } from "@/entities/news";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi.ts";
import { getCurrentNews } from "@/entities/news/model/newsSlice.ts";
import { NewsList } from "@/widgets/news/ui";
import { useNavigate } from "react-router-dom";
import s from "./LatestNews.module.css";

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(getCurrentNews(news));
    navigate(`news/${news.id}`);
  };

  return (
    <section className={s.section}>
      <NewsList
        type={"banner"}
        direction={"row"}
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => (
          <p onClick={() => navigateTo(news)}>view more...</p>
        )}
      />
    </section>
  );
};
