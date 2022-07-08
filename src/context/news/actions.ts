import { TNewsItem } from "../../type/type";
import { ActionsTypesNews } from "./actions-types";
import { TFilterNews } from "./reducer";

/*действие которое будет происходить на старт запроса
возвращает объект {type: type}*/
export const GetNewsStartAction = () => ({
	type: ActionsTypesNews.GET_NEWS_START,
});

/*действие которое будет происходить при получения запроса
возвращает объект {type: type, news:news, filter:filter}*/
export const GetNewsSucssesAction = (news: TNewsItem[], filter: TFilterNews) => ({
	type: ActionsTypesNews.GET_NEWS_SUCSSES,
	news, filter
});

/*действие которое будет происходить при ошибке запроса
возвращает объект {type: type, error: error} */
export const GetNewsErrorAction = (error: Error) => ({
	type: ActionsTypesNews.GET_NEWS_ERROR,
	error
});

/*действие которое будет происходить при передаче параметров запроса (page & pageSiaze)
возвращает объект {type: type, filter:filter} */
export const SetNewsFilterAction = (filter: TFilterNews) => ({
	type: ActionsTypesNews.SET_FILTER,
	filter
});


export const RemoveNewsAction = (news:TNewsItem[]) => ({
	type: ActionsTypesNews.REMOVE_NEWS,
	news
});

// export const SearchNewsAction = (news:any) => ({
// 	type: ActionsTypesNews.SEARCH_NEWS,
// 	news
// });
