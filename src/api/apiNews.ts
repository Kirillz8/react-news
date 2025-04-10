import axios from "axios";
import { newsMockData } from "../newsMockData.ts";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const USE_MOCK = import.meta.env.VITE_NEWS_APP_USE_MOCK;

type GetNewsParams = {
  pageNumber: number;
  pageSize: number;
  category: string | null; // category обязательно должна быть строкой
};

export const getNews = async ({
  pageNumber = 1,
  pageSize = 5,
  category,
}: GetNewsParams) => {
  if (USE_MOCK === "true") {
    // Получаем полный массив новостей из моковых данных
    const allNews = newsMockData.news;

    const filteredNews = category
      ? allNews.filter((newsItem) => newsItem.category.includes(category))
      : allNews;

    // Вычисляем индекс начала выборки для текущей страницы
    const startIndex = (pageNumber - 1) * pageSize;

    // Нарезаем массив для получения только нужной «страницы»
    const paginatedNews = filteredNews.slice(startIndex, startIndex + pageSize);

    // Возвращаем объект, соответствующий типу NewsResponse
    return Promise.resolve({
      status: newsMockData.status,
      page: pageNumber,
      news: paginatedNews,
      category,
    });
  }

  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        pageNumber,
        pageSize,
        category,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении новостей:", error);
    throw error;
  }
};

export const getCategories = async () => {
  // if (USE_MOCK === "true") {
  //   // Получаем полный массив новостей из моковых данных
  //   const allNews = newsMockData.news;
  //   // Вычисляем индекс начала выборки для текущей страницы
  //   const startIndex = (pageNumber - 1) * pageSize;
  //   // Нарезаем массив для получения только нужной «страницы»
  //   const paginatedNews = allNews.slice(startIndex, startIndex + pageSize);
  //
  //   // Возвращаем объект, соответствующий типу NewsResponse
  //   return Promise.resolve({
  //     status: newsMockData.status,
  //     page: pageNumber,
  //     news: paginatedNews,
  //   });
  // }

  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении новостей:", error);
    throw error;
  }
};
