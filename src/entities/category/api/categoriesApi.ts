import type { CategoriesApiResponse } from "@/entities/category";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getCategories: build.query<CategoriesApiResponse, void>({
      query: () => {
        return {
          url: `available/categories`,
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
