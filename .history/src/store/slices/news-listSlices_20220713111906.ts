import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Newsapi from '../../services/config';

export const fetchNewsList = createAsyncThunk(
  'NewsList/fetchNewsList',
  async function (sortBy?: string) {

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      
      if (!response.ok) {
          throw new Error('Server Error!');
      }

      const data = await response.json();

      return data;
  } catch (error) {
      return rejectWithValue(error.message);
  }

    // if (!response.ok) {
    //     throw new Error('Server Error!');
    // }

    // const data = await response.json();

    return response.articles;

  }
);

type TFilter = {
  totalLenght: number;
  pageSize: number;
  totalPage: number;
  current: number;
  minIndex: number;
  maxIndex: number;
}


const NewsListSlice = createSlice({
  name: 'news-list',
  initialState: {
    articles: [],
    loading: null,
    error: null,
    filter:{
      totalLenght: 0,
      pageSize: 9,
      totalPage: 0,
      current: 1,
      minIndex: 0,
      maxIndex: 0
    }
  },
  reducers: {
  },
  extraReducers:{
    fetchNewsList(state, action){
      state.articles=action.payload;
    }
  }

})



export default NewsListSlice.reducer;