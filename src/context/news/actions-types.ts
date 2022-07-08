
//типы action(действий) которые могут быть 
export const ActionsTypesNews = {
    GET_NEWS_START: '[NEWS] GET_NEWS_START',
    GET_NEWS_SUCSSES: '[NEWS] GET_NEWS_SUCSSES',
    GET_NEWS_ERROR: '[NEWS] GET_NEWS_ERROR',
    SET_FILTER: '[NEWS] SET_FILTER',

    REMOVE_NEWS: '[NEWS] REMOVE_NEWS',

    SEARCH_NEWS:'[NEWS] SEARCH_NEWS'
} as const;