import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Newsapi from '../../services/config';

export const fetchTodos = createAsyncThunk(
  'NewsList/fetchNewsList',
  async function(_, {rejectWithValue}) {
      try {
          const response = await Newsapi.getNews('?q=art%painter&NFT&').then()
          
          if (!response.ok) {
              throw new Error('Server Error!');
          }
  
          // const data = await response.json();
  
          return data;
      } catch (error) {
          return rejectWithValue(error.message);
      }
  }
);