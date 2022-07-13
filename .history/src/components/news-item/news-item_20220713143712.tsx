import { useDeferredValue, useEffect, useState } from "react";
import { DeleteOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Card, Col, notification, PageHeader, Pagination, Popover, Row } from 'antd';
import { TNewsItem } from '../../type/type';
import './style.css'
import { useNavigate } from "react-router-dom";
import { removeNews, addToReading } from '../../store/slices/news-listSlices';
import { useAppDispatch } from "../../hook/redux-hooks";


type TFilter = {
  totalLenght: number;
  pageSize: number;
  totalPage: number;
  current: number;
  minIndex: number;
  maxIndex: number;
}

const NewsItem_e.stopPropagation()
                dispatch(removeNews(article.title)) = ({ articles }: { articles: TNewsItem[] | [] }) => {
  const [filter1, setFilter] = useState<TFilter>({
    totalLenght: 0,
    pageSize: 9,
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0
  })

  const handlerPage = (page: number) => {
    setFilter({ ...filter1, current: page, minIndex: (page - 1) * filter1.pageSize, maxIndex: page * filter1.pageSize })
  }

  const values: [] | TNewsItem[] = useDeferredValue(articles);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const handlerAddToRead = (title: string) => {
    return (e: any) => {
      e.stopPropagation()
      dispatch(addToReading(title))
      notification.open({
        message: 'Article added to reading list :)',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        placement: 'top',
      });
    }
  }

  const handlerRemove = (title: string) => {
    return (e: any) => {
      e.stopPropagation()
      dispatch(removeNews(title))
    }
  }

  useEffect(() => {
    handlerPage(filter1.current)
  }, [])

  return (
    <>
      {
        values.map((article: TNewsItem, index: number) => (
          index >= filter1.minIndex && index < filter1.maxIndex &&
          <div
            key={index}
            className="site-card-wrapper"
            style={{ backgroundImage: `url(${article.urlToImage})` }}
            onClick={(e: any) => {
              navigate(`/${article.title}`)
            }}>
            <a>
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
              <Button type="primary" shape="round" className='btn-del'
                onClick={handlerRemove(article.title)}>
                <DeleteOutlined />
              </Button>
            </Popover>
          </div>
        ))
      }
      <Pagination
        current={filter1.current}
        onChange={handlerPage}
        total={values?.length}
      />
    </>

  )
}

export default NewsItem