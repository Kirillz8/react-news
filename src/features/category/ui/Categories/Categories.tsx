import type { CategoriesType } from "@/entities/category";
import { type ForwardedRef, forwardRef } from "react";
import s from "./Categories.module.css";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

export const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>,
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
