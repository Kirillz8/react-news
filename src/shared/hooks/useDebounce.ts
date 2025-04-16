import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);

      return () => {
        clearTimeout(timer);
      };
    }, delay);
  }, [value, delay]);

  return debouncedValue;
};
