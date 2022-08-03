import { Button, Empty, Typography } from "antd";
import { TNewsItem } from "../../type";
import './style.css'
import NewsItem from '../../components/news-item'
import { useAppDispatch } from "../../hook/redux-hook";
import { openArticle } from "../../store/slices/news-list-slice";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const ReadingListPage = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const arr = JSON.parse(localStorage.getItem('readingList') as string);

  const handlerOpen = (article: TNewsItem) => (_e: any) => {
    navigate(`/${article.title}`);
    dispatch(openArticle(article));
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
              </Button>
            </div>
          </>
        } />}
        {arr && arr.map((article: any, index: number) => {
          return <NewsItem
            key={index}
            article={article}
            handlerOpen={handlerOpen}
          />
        })
        }
      </>
    </div>
  )
}

export default ReadingListPage