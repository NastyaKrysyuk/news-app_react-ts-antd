import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Newsapi from '../../services/config';

export const fetchNewsList = createAsyncThunk(
  'NewsList/fetchNewsList',
  async function (sortBy?: string) {

    const response = await Newsapi.getNews('?q=art%painter&NFT&', sortBy).then((res: any) => { res.articles })

    // if (!response.ok) {
    //     throw new Error('Server Error!');
    // }

    // const data = await response.json();

    return response;

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
  extraReducers

})

const {fetchNewsList} = NewsListSlice.actions;

export default NewsListSlice.reducer;