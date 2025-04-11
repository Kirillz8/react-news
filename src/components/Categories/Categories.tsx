import { forwardRef } from "react";
import s from "./Categories.module.css";

type CategoriesProps = {
  categories: string[];
  setSelectedCategory: (category: string | null) => void;
  selectedCategory: string | null;
};

export const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: CategoriesProps,
    ref,
  ) => {
    return (
      <div ref={ref} className={s.categories}>
        <button
          className={!selectedCategory ? s.active : s.item}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              className={selectedCategory === category ? s.active : s.item}
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  },
);

// Categories.displayName = "Categories";
