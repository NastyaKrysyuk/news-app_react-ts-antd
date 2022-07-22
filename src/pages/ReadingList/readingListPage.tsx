import { Button, Empty, Typography } from "antd";
import NewsItems from "../../components/news-items";
import { TNewsItem } from "../../type/type";
import './style.css'
import NewsItem from '../../components/news-item'

const { Title } = Typography;

const ReadingListPage = () => {

  let arr: TNewsItem[] = []
  const keys: string[] = Object.keys(localStorage)
  
  keys && keys.map((key: string ) => {
    let articleJSON:any= localStorage.getItem(key)
    let articlePars:TNewsItem=JSON.parse(articleJSON)
    arr.push(articlePars)
  })

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
        { arr && <NewsItems articles={arr}/>}
        {console.log(arr)}
        {/* {arr && arr.map((article, index) => {
          <NewsItem
            key={index}
            article={article}
          />
        })
        } */}
      </>
    </div>
  )
}

export default ReadingListPage