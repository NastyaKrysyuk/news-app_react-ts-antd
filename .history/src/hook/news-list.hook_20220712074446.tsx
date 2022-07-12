import { useContext, useEffect, useState } from "react";
import { TNewsItem } from "../../type/type";
import Newsapi from "../../services/config";


type TFilter = {
  totalLenght: number;
  pageSize: number;
  totalPage: number;
  current: number;
  minIndex: number;
  maxIndex: number;
}

const useNewsList = () => {
  const [articles, setArticles] = useState<[] | TNewsItem[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [filter, setFilter] = useState<TFilter>({
    totalLenght: 0,
    pageSize: 9,
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0
  })
  
  
  //запрос на список героев 
  const getNews = async () => {
    setLoading(true)
    try {
      await Newsapi.getNews('?q=art%painter&NFT&apiKey=e1f6d61fb3224655b09882e1f3fc11b4').then((res: any) => {
        setArticles(res.articles)
        setFilter({
          ...filter,
          totalLenght: res.articles.lenght,
          totalPage: filter.totalLenght / filter.pageSize,
          maxIndex: filter.pageSize,
          minIndex: 0
        })
      })
    } catch (e: any) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handlerPage = (page: number) => {
    setFilter({ ...filter, current: page, minIndex: (page - 1) * filter.pageSize, maxIndex: page * filter.pageSize })
  }

  useEffect(() => {
    getNews();
  }, [])

  return { loading, error, articles, filter, handlerPage, setArticles }

}

export default useNewsList



