import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Newsapi from '../../services/config';


export const fetchNewsList = createAsyncThunk(
  'NewsList/fetchNewsList',
  async function (sortBy: string, { rejectWithValue }) {
    try {
 const response:any = await Newsapi.getNews(`?q=art%painter&NFT&`,sortBy).then((response:any)=>response.articles)
      // if 
      // (!response.ok) throw new Error('Server Error!');
  console.log(response)
      // const data = await response.json();
      return response;

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