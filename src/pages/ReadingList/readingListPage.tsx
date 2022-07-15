import { Button, Empty, Typography } from "antd";
import NewsItems from "../../components/news-items";
import { TNewsItem } from "../../type/type";
import './style.css'
import NewsItem from '../../components/news-item'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook/redux-hooks";
import { openArticle } from "../../store/slices/news-listSlices";

const { Title } = Typography;

const ReadingListPage = () => {
  let arr: [] | TNewsItem[] = []
  const keys: string[] = Object.keys(localStorage)
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  keys.map((key: string | null) => {
    //@ts-ignore
    arr.push(JSON.parse(localStorage.getItem(key)))
  })

  const handlerOpen = (article: TNewsItem) => () => {
    navigate(`/${article.title}`)
    dispatch(openArticle(article))
  }

  return (
    <div className='wrapper-news-list'>
      <>
        <Title>Your personal reading list:</Title>
        {arr.length === 0 && <Empty description={
          <>
            <h2>You have not added anything to your reading list </h2>
            <div>Go back to the home page and click on
              <Button className='btn-more' type="primary" shape="round">
                add to reading list
              </Button></div>
          </>
        } />}
        <NewsItems articles={arr}/>
        {/* {arr.map((article, index) => {
          <NewsItem
            key={index}
            article={article}
            handlerOpen={handlerOpen}
          />
        })
        } */}
      </>
    </div>
  )
}

export default ReadingListPage