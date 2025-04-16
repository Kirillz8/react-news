import { useAppDispatch } from "@/app/appStore.ts";
import { useTheme } from "@/app/providers/ThemeProvider.tsx";
import { Categories } from "@/features/category/ui/Categories/Categories.tsx";
import { Search } from "@/features/search/ui/Search/Search.tsx";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi.ts";
import { Slider } from "@/features/slider/ui/Slider/Slider.tsx";
import type { IFilters } from "src/shared/interfaces";
import { getFilters } from "@/entities/news/model/newsSlice.ts";
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
