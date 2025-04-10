import s from "./Categories.module.css";

type CategoriesProps = {
  categories: string[];
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
};

export const Categories = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: CategoriesProps) => {
  return (
    <div className={s.categories}>
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
};
