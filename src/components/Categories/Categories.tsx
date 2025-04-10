import s from "./Categories.module.css";

type CategoriesProps = {
  categories: string[];
  setSelectedCategory: (category: string | null) => void;
  selectedCategory: string | null;
};

export const Categories = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: CategoriesProps) => {
  return (
    <div className={s.categories}>
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
};
