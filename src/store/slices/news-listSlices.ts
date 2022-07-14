import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchNewsList} from "../actions/news";
import {TNewsItem} from "../../type/type";


export type TNewsList = {
  articles: TNewsItem[] | [],
  article: TNewsItem | null,
  loading: boolean,
  error: any,
}
const initialState: TNewsList = {
  articles: [],
  article: null,
  loading: false,
  error: null,
}

const NewsListSlice = createSlice({
  name: 'news-list',
  initialState: initialState,
  reducers: {
    removeNews(state, action) {
      state.articles = state.articles.filter((todo: any) => todo.title !== action.payload);
    },
    addToReading(state, action: {payload: TNewsItem}) {
      state.article = action.payload
      // localStorage.setItem(payload, JSON.stringify(arr))
    }
  },
  extraReducers: {
    [fetchNewsList.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchNewsList.fulfilled.type]: (state, action) => {
      state.error = false;
      state.loading = false;
      state.articles = action.payload;
    },
    [fetchNewsList.rejected.type]: (state, action) => {
      // state.status = 'rejected';
      state.error = action.payload;
    },
  }
})

export const { removeNews, addToReading } = NewsListSlice.actions

export default NewsListSlice.reducer;