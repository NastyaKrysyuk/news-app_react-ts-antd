import {useAppSelector} from "../../hook/redux-hooks";

const Article=()=>{
  const article = useAppSelector((state) => state.newsList.article)
  return (
      <div>
        <h1>{article?.title}</h1>
        <p>{article?.description}</p>
      </div>
  )
}
export default Article