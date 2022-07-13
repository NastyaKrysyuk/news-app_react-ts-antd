import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Newsapi from '../../services/config';

export const fetchTodos = createAsyncThunk(
  'NewsList/fetchNewsList',
  async function(_, {rejectWithValue}) {
    
          const response = await Newsapi.getNews('?q=art%painter&NFT&').then((res:any)=>{res.articles})
          
          // if (!response.ok) {
          //     throw new Error('Server Error!');
          // }
  
          // const data = await response.json();
  
          return response;
      
  }
);

const NewsListSlice=createSlice({
  name: 'news-list',
  initialState: {
      todos: [],
      status: null,
      error: null,
  },
  reducers: {}

})