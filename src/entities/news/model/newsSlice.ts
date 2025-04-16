import type { INews } from "@/entities/news";
import type { IFilters } from "@/shared/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PAGE_SIZE } from "@/shared/constants/constants.ts";

export interface AppState {
  news: INews[];
  filters: IFilters;
}

const initialState: AppState = {
  news: [],
  filters: {
    pageNumber: 1,
    pageSize: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    getFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | number | null }>,
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { getNews, getFilters } = newsSlice.actions;

export default newsSlice.reducer;
