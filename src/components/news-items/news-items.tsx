import { FC, useDeferredValue, useEffect, useState } from "react";
import { DeleteOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Card, Col, notification, Pagination, Popover, Row } from 'antd';
import { TNewsItem } from '../../type/type';
import './style.css'
import { useNavigate } from "react-router-dom";
import { removeNewsItem, openArticle } from '../../store/slices/news-listSlices';
import { useAppDispatch } from "../../hook/redux-hooks";
import NewsItem from '../../components/news-item'

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

const NewsItems: FC<TProps> = ({ articles }) => {

  const [filter, setFilter] = useState<TFilter>({
    totalLenght: 0,
    pageSize: 12,
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

  const handlerAddToRead = (title: string) => {
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
          <NewsItem
          key={index}
          article={article} 
          handlerOpen={handlerOpen}
          handlerAddToRead={handlerAddToRead}
          handlerRemove={handlerRemove}
          />
        ))
      }
      <div className="pagination">
        <Pagination
          current={filter.current}
          onChange={handlerPage}
          total={values?.length}
        />
      </div>

    </>

  )
}

export default NewsItems