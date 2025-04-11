import { getCategories } from "../../api/apiNews.ts";
import { Categories } from "../Categories/Categories.tsx";
import { useFetch } from "../helpers/hooks/useFetch.ts";
import { Search } from "../Search/Search.tsx";
import { Slider } from "../Slider/Slider.tsx";
import s from "./NewsFilters.module.css";

export const NewsFilters = ({ filters, changeFilters }) => {
  const { data: dataCategories } = useFetch(getCategories);

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
