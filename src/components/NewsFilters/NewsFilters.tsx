import { useTheme } from "../../context/ThemeContext.tsx";
import type { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi.ts";
import { getFilters } from "../../store/slices/newsSlice.ts";
import { Categories } from "../Categories/Categories.tsx";
import { Search } from "../Search/Search.tsx";
import { Slider } from "../Slider/Slider.tsx";
import s from "./NewsFilters.module.css";

interface Props {
  filters: IFilters;
}

export const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();

  const dispatch = useAppDispatch();
  const { data } = useGetCategoriesQuery();

  return (
    <div className={s.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(getFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(getFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};
