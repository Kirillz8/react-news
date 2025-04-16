import { useAppDispatch } from "@/app/appStore.ts";
import { useTheme } from "@/app/providers/ThemeProvider.tsx";
import type { CategoriesType } from "@/entities/category";
import { Categories } from "@/features/category/ui/Categories/Categories.tsx";
import { Search } from "@/features/search/ui/Search/Search.tsx";
import { Slider } from "@/features/slider/ui/Slider/Slider.tsx";
import type { IFilters } from "@/shared/interfaces";
import { getFilters } from "@/entities/news/model/newsSlice.ts";
import s from "./NewsFilters.module.css";

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

export const NewsFilters = ({ filters, categories }: Props) => {
  const { isDark } = useTheme();

  const dispatch = useAppDispatch();

  return (
    <div className={s.filters}>
      {categories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
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
