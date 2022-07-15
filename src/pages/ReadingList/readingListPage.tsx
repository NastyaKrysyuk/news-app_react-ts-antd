import { Button, Empty, Typography } from "antd";
import NewsItem from "../../components/news-item";
import { TNewsItem } from "../../type/type";
import './style.css'

const { Title } = Typography;

const ReadingListPage = () => {
  let arr: [] | TNewsItem[] = []
  const keys: string[] = Object.keys(localStorage)
  keys.map((key: string | null) => {
    //@ts-ignore
    arr.push(JSON.parse(localStorage.getItem(key)))
  })
  return (
    <div className='wrapper-news-list'>
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
      {arr && <NewsItem articles={arr} />}
    </div>


  )
}

export default ReadingListPage