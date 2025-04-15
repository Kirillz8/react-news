import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  CategoriesApiResponse,
  NewsApiResponse,
  ParamsType,
} from "../../interfaces";
import { getNews } from "../slices/newsSlice.ts";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getNews: build.query<NewsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const {
          pageNumber = 1,
          pageSize = 5,
          category,
          keywords,
        } = params || {};
        return {
          url: `search`,
          params: {
            apiKey: API_KEY,
            pageNumber,
            pageSize,
            category,
            keywords,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(getNews(data.news));
      },
    }),
    getLatestNews: build.query<NewsApiResponse, void>({
      query: () => {
        return {
          url: `latest-news`,
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
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

export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery } =
  newsApi;
