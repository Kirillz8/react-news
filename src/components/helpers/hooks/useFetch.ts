import { useEffect, useState } from "react";

export function useFetch<T, P = void>(
  fetchFunc: (params?: P) => Promise<T>,
  params?: P,
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Вместо URLSearchParams можно использовать JSON.stringify для надежности
  const stringParams = params ? JSON.stringify(params) : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunc(params);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunc, stringParams]);

  return { data, isLoading, error };
}
