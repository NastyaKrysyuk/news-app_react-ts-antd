import { FC, SyntheticEvent, useDeferredValue, useEffect, useState } from "react";
import { TNewsItem } from '../../type/type';
import NewsItem from '../../components/news-item'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook/redux-hook";
import { addToRead, openArticle, removeNewsItem } from "../../store/slices/news-list-slice";

import { SmileOutlined } from "@ant-design/icons";
import { notification, Pagination } from 'antd';
import './style.css'

type TFilter = {
  totalLenght: number;
  pageSize: number;
  totalPage: number;
  defaultCurrent: number;
  minIndex: number;
  maxIndex: number;
}

type TProps = {
  articles: TNewsItem[]
}

const NewsItems: FC<TProps> = ({ articles }) => {
  
  const values: [] | TNewsItem[] = useDeferredValue(articles);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const handlerAddToRead = (title: string) => {
    return (e: SyntheticEvent) => {
      e.stopPropagation()
      dispatch(addToRead(title))
      dispatch(removeNewsItem(title))
      notification.open({
        message: 'Article added to reading list.',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        placement: 'bottom',
        duration: 2
      });
    }
  }

  const handlerRemove = (title: string) => {
    return (e: SyntheticEvent) => {
      e.stopPropagation();
      dispatch(removeNewsItem(title));
    }
  }

  const handlerOpen = (article: TNewsItem) => (_e: SyntheticEvent) => {
    navigate(`/${article.title}`);
    dispatch(openArticle(article));
  }
  const [filter, setFilter] = useState<TFilter>({
    totalLenght: 0,
    pageSize: 12,
    totalPage: 0,
    defaultCurrent: 1,
    minIndex: 0,
    maxIndex: 0
  })

  const handlerPage = (page: number) => {
    setFilter({
      ...filter,
      defaultCurrent: page,
      minIndex: (page - 1) * filter.pageSize,
      maxIndex: page * filter.pageSize
    })
  }

  useEffect(() => {
    handlerPage(filter.defaultCurrent);
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        values.map((article: TNewsItem, index: number) => (
          index >= filter.minIndex && index < filter.maxIndex
          && <NewsItem
            key={article.title}
            article={article}
            handlerOpen={handlerOpen}
            handlerAddToRead={handlerAddToRead}
            handlerRemove={handlerRemove}
          />
        ))
      }
      <div className="pagination">
        <Pagination
          pageSize={filter.pageSize}
          showSizeChanger={false}
          defaultCurrent={filter.defaultCurrent}
          onChange={handlerPage}
          total={values?.length}
        />
      </div>
    </>
  )
}

export default NewsItems;