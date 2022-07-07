import AppContext from "./context";
import useNewsList from "../news-list/news-list.hook";
import { FC } from "react";

const MyProvider: FC<{children: any}> = ({children}) => {
  const { loading, error, articles, filter, handlerPage, setArticles } = useNewsList({ pageSize: 6 })


  return (
    <AppContext.Provider value={{loading:loading, error:error, articles:articles, filter:filter, handlerPage:handlerPage, setArticles:setArticles }}>
    {children}
    </AppContext.Provider>
)
}

export default MyProvider