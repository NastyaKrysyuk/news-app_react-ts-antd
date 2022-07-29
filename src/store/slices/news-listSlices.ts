import { createSlice } from '@reduxjs/toolkit';
import { fetchNewsList } from "../actions/news";
import { TNewsItem } from "../../type/type";

type TState = {
  articles: TNewsItem[],
  article: TNewsItem | null,
  loading: boolean,
  error: any,
  count: number,
}
const initialState: TState = {
  articles: [],
  article: null,
  loading: false,
  error: null,
  count: !!localStorage.getItem('readingList') ? JSON.parse(localStorage.getItem('readingList') as string).length : 0 ,
}

const NewsListSlice = createSlice({
  name: 'news-list',
  initialState: initialState,
  reducers: {

    removeNewsItem(state, action) {
      state.articles = state.articles.filter((todo: TNewsItem) => todo.title !== action.payload);
    },

    openArticle(state, action: { payload: TNewsItem }) {
      state.article = action.payload;
    },

    addToRead(state, action) {

      const uniq = function (array: TNewsItem[]) {
        const seen:any = {};
        return array.filter(function(x) {
          const key = JSON.stringify(x.title);
          return !(key in seen) && (seen[key] = x);
        });
      }

      const aticleForAdd: TNewsItem | undefined = state.articles.find((el: TNewsItem) => { return el.title === action.payload });

      if (aticleForAdd) {
        const localArticles = JSON.parse(localStorage.getItem('readingList') as string);
        localArticles.push(aticleForAdd);
        localStorage.setItem('readingList', JSON.stringify(uniq(localArticles)));
        if (localArticles.length === uniq(localArticles).length) {
          state.count++;
        }
      }
    },

    setCount(state, action) {
      state.count = action.payload
    },

  },
  extraReducers: {
    [fetchNewsList.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchNewsList.fulfilled.type]: (state, action) => {
      state.error = false;
      state.loading = false;
      state.articles = action.payload;
    },
    [fetchNewsList.rejected.type]: (state, action) => {
      state.error = action.payload;
    },
  }
})

export const { removeNewsItem, openArticle, addToRead, setCount } = NewsListSlice.actions

export default NewsListSlice.reducer;