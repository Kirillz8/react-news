import { useEffect, useState } from "react";

interface FetchFunction<P, T> {
  (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
  data: T | undefined | null;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(
  fetchFunc: FetchFunction<P, T>,
  params?: P,
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Вместо URLSearchParams можно использовать JSON.stringify для надежности
  const stringParams = params ? new URLSearchParams(params).toString() : "";

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
};
