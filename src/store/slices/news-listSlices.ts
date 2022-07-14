import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchNewsList} from "../actions/news";



const NewsListSlice = createSlice({
  name: 'news-list',
  initialState: {
    articles: [],
    loading: false,
    error: false,
  },
  reducers: {
    removeNews(state, action) {
      state.articles = state.articles.filter((todo: any) => todo.title !== action.payload);
    },
    addToReading(state, action) {
      const arr = state.articles.find((el: any) => { return el.title === action.payload });
      localStorage.setItem(action.payload, JSON.stringify(arr))
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