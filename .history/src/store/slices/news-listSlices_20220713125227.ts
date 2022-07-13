import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Newsapi from '../../services/config';

export const fetchNewsList = createAsyncThunk(
  'NewsList/fetchNewsList',
  async function (sortBy?: string) {

    const response = await fetch(`https://newsapi.org/v2/everything?q=art%painter&NFT&sortBy=${sortBy}&apiKey=e1f6d61fb3224655b09882e1f3fc11b4`);

    if (!response.ok) {
      throw new Error('Server Error!');
    }

    const data = await response.json();

    console.log(data.articles)
    return data.articles;
  }
);

const NewsListSlice = createSlice({
  name: 'news-list',
  initialState: {
    articles: [],
    loading: false,
    error: false,
    filter: {
      totalLenght: 0,
      pageSize: 9,
      totalPage: 0,
      current: 1,
      minIndex: 0,
      maxIndex: 0
    }
  },
  reducers: {
    handlerPage(state,action){
     state.filter.current=action.payload;
     state.filter.maxIndex=(action.payload-1)*state.filter.pageSize;
     state.filter.maxIndex
    }
  },
  extraReducers: {
    //@ts-ignore
    [fetchNewsList.fulfilled]: (state, action) => {
      state.error = false;
      state.articles = action.payload;
  }
    // fetchNewsList(state, action) {
    //   state.articles = action.payload;
    // }
  }
})

// const {fetchNewsList}= NewsListSlice.actions

export default NewsListSlice.reducer;