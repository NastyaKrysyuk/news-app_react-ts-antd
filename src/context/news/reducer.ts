import { ActionsTypesNews } from './actions-types';
import { InferValueTypes } from '../../type/common';
import * as actions from './actions';
import { TNewsItem } from '../../type/type';


type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type TFilterNews = {
    page: number,
    pageSize: number,
    count?: number,
}


export type NewsStore = {
    news: TNewsItem[] | [];
    filter: TFilterNews;
    isLoading: boolean;
    error: any;
    queryInput: string
};

//первоначальный стейт
export const initialStore: NewsStore = {
    news: [],
    filter: {
        page: 1,
        pageSize: 9,
    },
    isLoading: false,
    error: null,
    queryInput: ''
};

/*описание редюсера
принимает (стейт, экшены) */
export default function CommonReducer(
    state: NewsStore = initialStore,
    actions: ActionTypes,
): NewsStore {
    switch (actions.type) {
        case ActionsTypesNews.GET_NEWS_START:
            return { ...state, isLoading: true }
        case ActionsTypesNews.GET_NEWS_SUCSSES:
            return { ...state, isLoading: false, news: actions.news, filter: actions.filter }
        case ActionsTypesNews.GET_NEWS_ERROR:
            return { ...state, isLoading: false, error: actions.error }
        case ActionsTypesNews.SET_FILTER:
            return { ...state, filter: actions.filter }

        case ActionsTypesNews.REMOVE_NEWS:
            return { ...state, news: actions.news }

        case ActionsTypesNews.SEARCH_NEWS:
            return { ...state, isLoading: false, queryInput: actions.queryInput, news: actions.news, filter: actions.filter }
        default:
            return state;
    }
}