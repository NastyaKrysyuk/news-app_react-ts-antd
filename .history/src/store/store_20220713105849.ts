import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlices'
import './slices/'

export const store = configureStore({
  reducer: {
    authUser: authReducer,
    newsList: newsListReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;