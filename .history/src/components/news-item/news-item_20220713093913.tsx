import { useDeferredValue } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, Pagination, Popover, Row } from 'antd';
import { TNewsItem } from '../../type/type';
import './style.css'
import { useNavigate } from "react-router-dom";
import { cursorTo } from "readline";

const NewsItem = ({ articles, handlerRemove , handlerAddToRead,handlerPage,filter}: {
  articles: TNewsItem[] | [],
  handlerRemove: any,
  handlerAddToRead:any,
  handlerPage:any,
  filter:any
}) => {
  const values: [] | TNewsItem[] = useDeferredValue(articles);
  const navigate = useNavigate()
	
  return (
    <>
      {
        values.map((article: TNewsItem, index: number) => (
          index >= filter.minIndex && 
          index < filter.maxIndex &&
          <div  className="site-card-wrapper" style={{ backgroundImage: `url(${article.urlToImage})`,cursor:'pointer' }} onClick={(e:any)=>{
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
              <Button className='btn-more' type="primary" shape="round" onClick={handlerAddToRead(article.title)}>
                add to reading list
              </Button>
            </a>
            <Popover content='Hide'>
              <Button type="primary" shape="round" className='btn-del' onClick={handlerRemove(article.title)}>
                <DeleteOutlined />
              </Button>
            </Popover>
          </div>
        ))
      }
      <Pagination
        current={filter.current}
        onChange={handlerPage}
        total={articles?.length}
      />
    </>

  )
}

export default NewsItem