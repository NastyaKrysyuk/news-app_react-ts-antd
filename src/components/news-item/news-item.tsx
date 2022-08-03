import { FC, useDeferredValue, useEffect, useState } from "react";
import { DeleteOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Card, Col, notification, Pagination, Popover, Row } from 'antd';
import { TNewsItem } from '../../type/type';
import './style.css'
import { useNavigate } from "react-router-dom";
import { removeNewsItem, openArticle } from '../../store/slices/news-listSlices';
import { useAppDispatch } from "../../hook/redux-hooks";


type TFilter = {
  totalLenght: number;
  pageSize: number;
  totalPage: number;
  current: number;
  minIndex: number;
  maxIndex: number;
}

type TProps = {
  articles: TNewsItem[] | []
}

const NewsItem: FC<TProps> = ({ articles }) => {

  const [filter, setFilter] = useState<TFilter>({
    totalLenght: 0,
    pageSize: 9,
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0
  })

  const handlerPage = (page: number) => {
    setFilter({ ...filter, current: page, minIndex: (page - 1) * filter.pageSize, maxIndex: page * filter.pageSize })
  }

  const values: [] | TNewsItem[] = useDeferredValue(articles);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const handlerAddToRead = (title:string) => {
    return (e: any) => {
      e.stopPropagation()
      const arr = articles.find((el: any) => { return el.title === title });
      localStorage.setItem(title, JSON.stringify(arr))
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
      dispatch(removeNewsItem(title))
    }
  }

  const handlerOpen = (article: TNewsItem) => () => {
    navigate(`/${article.title}`)
    dispatch(openArticle(article))
  }

  useEffect(() => {
    handlerPage(filter.current)
  }, [])

  return (
    <>
      {
        values.map((article: TNewsItem, index: number) => (
          index >= filter.minIndex && index < filter.maxIndex &&
          <div
            key={index}
            className="site-card-wrapper"
            style={{ backgroundImage: `url(${article.urlToImage})` }}
            onClick={handlerOpen(article)}>
              <Row gutter={1} style={{ display: 'block' }}>
                <Col >
                  <Card className='card-news' title={article.title} bordered={false} >
                    {article.description}
                  </Card>
                </Col>
              </Row>
              <Button className='btn-more' type="primary" shape="round" 
              onClick={handlerAddToRead(article.title)}>
                add to reading list
              </Button>
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
        current={filter.current}
        onChange={handlerPage}
        total={values?.length}
      />
    </>

  )
}

export default NewsItem