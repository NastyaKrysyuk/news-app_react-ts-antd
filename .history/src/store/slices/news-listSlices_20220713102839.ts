import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Newsapi from '../../services/config';

export const fetchTodos = createAsyncThunk(
  'NewsList/fetchNewsList',
  async function(_, {rejectWithValue}) {
      try {
          const response = await Newsapi.getNews('?q=art%painter&NFT&').then((res:any)=>{res.articles})
          
          // if (!response.ok) {
          //     throw new Error('Server Error!');
          // }
  
          // const data = await response.json();
  
          return response;
      } catch (error) {
          return rejectWithValue(error.message);
      }
  }
);