import { useState } from "react";

export const useFilters = (initialFilters: any) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilters = (key: string, value: string | number) => {
    setFilters((prev: any) => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, changeFilters };
};
