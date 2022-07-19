import { createAsyncThunk } from "@reduxjs/toolkit";
import Newsapi from "../../services/config";
import { collection, DocumentData, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { TNewsItem } from "../../type/type";

export const fetchNewsList = createAsyncThunk(
    'NewsList/fetchNewsList',
    async function (sortBy: string, { rejectWithValue }) {
        try {
            let articlesFirebase: TNewsItem[] = []
            const querySnapshot : QuerySnapshot<DocumentData> = await getDocs(collection(db, "articles"));
            querySnapshot.forEach((doc) => { articlesFirebase.push(doc.data().values) });
            const response = await Newsapi.getNews(`?q=art%painter&NFT&`, sortBy)
            const articles = articlesFirebase.concat(response.articles);
            return articles;

        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    });