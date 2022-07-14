import {createAsyncThunk} from "@reduxjs/toolkit";
import Newsapi from "../../services/config";

export const fetchNewsList = createAsyncThunk(
    'NewsList/fetchNewsList',
    async function (sortBy: string, { rejectWithValue }) {
        try {
            const response: any = await Newsapi.getNews(`?q=art%painter&NFT&`, sortBy)
            return response.articles;

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
});