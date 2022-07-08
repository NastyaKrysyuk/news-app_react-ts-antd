import { useContext } from "react"
import Newsapi from "../../services/config";
import { GetNewsErrorAction, GetNewsStartAction, GetNewsSucssesAction, RemoveNewsAction, SearchNewsAction, SetNewsFilterAction } from "./actions";
import { NewsContext } from "./news-context"
import { TFilterNews } from "./reducer";


//кастомный хук для использования стора и диспатч из провайдера
const useNewsContext = () => {
    const { store, dispatch } = useContext(NewsContext)
    if (dispatch === undefined) {
        throw new Error('dispatch must be inside a Provider with a value');
    }
    if (store === undefined) {
        throw new Error('store must be inside a Provider with a value');
    }

    return { store, dispatch }
}

//
const useNewsAsyncContext = () => {
    const { store, dispatch } = useNewsContext()

    //запрос за новостями 
    const getNews = async () => {
        //вызываем экшн на старт запроса {type: ActionsTypesNews.GET_NEWS_START} => {...state, isLoading: true}
        dispatch(GetNewsStartAction())

        try {

            //запрос за новостями 
            const { articles, totalResults } = await Newsapi.getNews1(store.filter.page, store.filter.pageSize)
            //вызываем экшен при получении новостей {type: ActionsTypesNews.GET_NEWS_SUCSSES, news, filter}=>{...state, isLoading: false, news: actions.news, filter: actions.filter}
            dispatch(GetNewsSucssesAction(articles, { ...store.filter, count: totalResults }))

        } catch (e: any) {
            //вызываем экшн при получении ошибки {type: ActionsTypesNews.GET_NEWS_ERROR,error} => {...state, isLoading: false, error: actions.error}
            dispatch(GetNewsErrorAction(e))
        }
    }
    //запрос при нажатии на пагинацию, придет page
    const setFilter = async (filter: TFilterNews) => {
        dispatch(GetNewsStartAction())
        try {
            //запрос с учётом номера страницы
            const { articles, totalResults } = await Newsapi.getNews1(filter.page, filter.pageSize)
            dispatch(GetNewsSucssesAction(articles, { ...filter, count: totalResults }))
        } catch (e: any) {
            dispatch(GetNewsErrorAction(e))
        }
    }


    //для удаления новости 
    const removeNews = async (news: any) => {
        dispatch(RemoveNewsAction(news))
    }

    // для поиска новости 
    const searchNews = async (valueInput: string) => {
        dispatch(GetNewsStartAction())
        try {
            //запрос с учётом номера страницы valueInput
            const { articles, totalResults } = await Newsapi.getNews1(store.filter.page, store.filter.pageSize, valueInput)
            dispatch(SearchNewsAction(articles, { ...store.filter }, valueInput))
        } catch (e: any) {
            dispatch(GetNewsErrorAction(e))
        }
    }

    return { ...store, getNews, setFilter, removeNews, searchNews }

}

export { useNewsContext, useNewsAsyncContext }