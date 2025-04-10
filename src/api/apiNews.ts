import axios from "axios";
import { newsMockData } from "../newsMockData.ts";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const USE_MOCK = import.meta.env.VITE_NEWS_APP_USE_MOCK;

export const getNews = async () => {
  if (USE_MOCK === "true") {
    // Возвращаем моковые данные, не делая реального запроса
    return Promise.resolve(newsMockData);
  }

  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
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
