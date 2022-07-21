import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, notification, Pagination, Popover, Row, Skeleton } from 'antd';
import { FC, SyntheticEvent, useEffect } from 'react';
import { useAppSelector } from '../../hook/redux-hooks';
import { TNewsItem } from '../../type/type';

const { Meta } = Card;

type TProps = {
  article: TNewsItem,
  handlerOpen?: (article: TNewsItem) => (e: SyntheticEvent) => void,
  handlerAddToRead?: (title: string) => (e: SyntheticEvent) => void,
  handlerRemove?: (title: string) => (e: SyntheticEvent) => void
}
const NewsItem: FC<TProps> = ({ article, handlerOpen, handlerAddToRead, handlerRemove }) => {
  return (
    <div
      className="castom-card site-card-wrapper"
      style={{ backgroundImage: `url(${article.urlToImage})` }}
      onClick={handlerOpen && handlerOpen(article)}>
      <Meta className='card-news' title={article.title} description={article.description} />
      {handlerAddToRead && <Button className='btn-more' type="primary" shape="round"
        onClick={handlerAddToRead(article.title)}>
        add to reading list
      </Button>}
      {handlerRemove && <Popover content='Hide'>
        <Button type="primary" shape="round" className='btn-del'
          onClick={handlerRemove(article.title)}>
          <DeleteOutlined />
        </Button>
      </Popover>}
    </div>
  )
}

export default NewsItem