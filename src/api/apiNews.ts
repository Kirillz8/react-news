import axios from "axios";
import { newsMockData } from "../newsMockData.ts";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const USE_MOCK = import.meta.env.VITE_NEWS_APP_USE_MOCK;

export const getNews = async (pageNumber = 1, pageSize = 5) => {
  if (USE_MOCK === "true") {
    // Получаем полный массив новостей из моковых данных
    const allNews = newsMockData.news;
    // Вычисляем индекс начала выборки для текущей страницы
    const startIndex = (pageNumber - 1) * pageSize;
    // Нарезаем массив для получения только нужной «страницы»
    const paginatedNews = allNews.slice(startIndex, startIndex + pageSize);

    // Возвращаем объект, соответствующий типу NewsResponse
    return Promise.resolve({
      status: newsMockData.status,
      page: pageNumber,
      news: paginatedNews,
    });
  }

  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        pageNumber,
        pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении новостей:", error);
    throw error;
  }
};
