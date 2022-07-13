import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Newsapi from '../../services/config';


export const fetchNewsList = createAsyncThunk(
  'NewsList/fetchNewsList',
  async function (sortBy: string, { rejectWithValue }) {
    try {
      // const response = await fetch(`https://newsapi.org/v2/everything?q=art%painter&NFT&sortBy=${sortBy}&apiKey=e1f6d61fb3224655b09882e1f3fc11b4`);
 const response = await Newsapi.getNews(`?q=art%painter&NFT`)
      if 
      (!response.ok) throw new Error('Server Error!');

      const data = await response.json();
      return data.articles;

    } catch (error) {
      //@ts-ignore
      return rejectWithValue(error.message);
    }});

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
    //@ts-ignore
    [fetchNewsList.pending]: (state) => {
      state.loading = true;
    },
    //@ts-ignore
    [fetchNewsList.fulfilled]: (state, action) => {
      state.error = false;
      state.loading = false;
      state.articles = action.payload;
    },
    //@ts-ignore
    [fetchNewsList.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
})

export const { removeNews, addToReading } = NewsListSlice.actions

export default NewsListSlice.reducer;