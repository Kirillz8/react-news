import { getCategories } from "../../api/apiNews.ts";
import type { CategoriesApiResponse, IFilters } from "../../interfaces";
import { Categories } from "../Categories/Categories.tsx";
import { useFetch } from "../../helpers/hooks/useFetch.ts";
import { Search } from "../Search/Search.tsx";
import { Slider } from "../Slider/Slider.tsx";
import s from "./NewsFilters.module.css";

interface Props {
  filters: IFilters;
  changeFilters: (key: string, value: string | number | null) => void;
}

export const NewsFilters = ({ filters, changeFilters }: Props) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories,
  );

  return (
    <div className={s.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilters("category", category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />
    </div>
  );
};
