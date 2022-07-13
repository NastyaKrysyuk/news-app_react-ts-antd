import { useDeferredValue } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, notification, Pagination, Popover, Row } from 'antd';
import { TNewsItem } from '../../type/type';
import './style.css'
import { useNavigate } from "react-router-dom";
import { handlerPage, removeNews, addToReading } from '../../store/slices/news-listSlices';
import { useAppDispatch } from "../../hook/redux-hooks";


const NewsItem = ({ articles, handlerAddToRead, handlerPage, filter }: {
  articles: TNewsItem[] | [],
  handlerAddToRead: any,
  handlerPage: any,
  filter: any
}) => {
  const values: [] | TNewsItem[] = useDeferredValue(articles);
  const navigate = useNavigate()
  console.log(values);
  const dispatch = useAppDispatch();
  
  return (
    <>
      {
        values.map((article: TNewsItem, index: number) => (
          // index >= filter.minIndex &&
          // index < filter.maxIndex &&
          <div key ={index} className="site-card-wrapper" style={{ backgroundImage: `url(${article.urlToImage})`, cursor: 'pointer' }} onClick={(e: any) => {
            navigate(`/${article.title}`)
          }}>
            <a >
              <Row gutter={1} style={{ display: 'block' }}>
                <Col >
                  <Card className='card-news' title={article.title} bordered={false} >
                    {article.description}
                  </Card>
                </Col>
              </Row>
              <Button className='btn-more' type="primary" shape="round" onClick={(_e) => {
                _e.stopPropagation()
                dispatch(addToReading(article.title))}
notification.open({
      //             message: 'Article added to reading list :)',
    //               icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    //               placement:'top',
    //           });
})

                }>
                add to reading list
              </Button>
            </a>
            <Popover content='Hide'>
              <Button type="primary" shape="round" className='btn-del' onClick={(_e) => {
                _e.stopPropagation()
                dispatch(removeNews(article.title))}}>
                <DeleteOutlined />
              </Button>
            </Popover>
          </div>
        ))
      }
      {/* <Pagination
        current={filter.current}
        onChange={handlerPage}
        total={articles?.length}
      /> */}
    </>

  )
}

export default NewsItem