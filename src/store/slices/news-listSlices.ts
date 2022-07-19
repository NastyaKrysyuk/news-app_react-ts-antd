import { createSlice } from '@reduxjs/toolkit';
import {fetchNewsList} from "../actions/news";
import {TNewsItem} from "../../type/type";


 type TState = {
  articles: TNewsItem[] | [],
  article: TNewsItem | null,
  loading: boolean,
  error: any,
}
const initialState: TState = {
  articles: [],
  article: null,
  loading: false,
  error: null,
}

const NewsListSlice = createSlice({
  name: 'news-list',
  initialState: initialState,
  reducers: {
    removeNewsItem(state, action) {
      state.articles = state.articles.filter((todo: TNewsItem) => todo.title !== action.payload);
    },
    openArticle(state, action: {payload: TNewsItem}) {
      state.article = action.payload
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
      state.error = action.payload;
    },
  }
})

export const { removeNewsItem, openArticle } = NewsListSlice.actions

export default NewsListSlice.reducer;