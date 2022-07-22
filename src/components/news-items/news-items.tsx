import { FC, memo, useDeferredValue, useEffect, useState } from "react";
import { Pagination} from 'antd';
import { TNewsItem } from '../../type/type';
import './style.css'
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
  articles: TNewsItem[]
}

const NewsItems: FC<TProps> = ({ articles }) => {
  
  const values: [] | TNewsItem[] = useDeferredValue(articles);
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

  useEffect(() => {
    handlerPage(filter.current)
  }, [])

  return (
    <>
      {
        values.map((article: TNewsItem, index: number) => (
          index >= filter.minIndex && index < filter.maxIndex
          && <NewsItem
            key={article.title}
            article={article}
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