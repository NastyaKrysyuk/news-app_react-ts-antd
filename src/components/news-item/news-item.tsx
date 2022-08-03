import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Popover } from 'antd';
import { FC, memo, SyntheticEvent } from 'react';
import { TNewsItem } from '../../type';

const { Meta } = Card;

type TProps = {
  article: TNewsItem,
  handlerOpen?: (article: TNewsItem) => (e: SyntheticEvent) => void,
  handlerAddToRead?: (title: string) => (e: SyntheticEvent) => void,
  handlerRemove?: (title: string) => (e: SyntheticEvent) => void
}
const NewsItemInner: FC<TProps> = ({ article, handlerOpen, handlerAddToRead, handlerRemove }) => {
  return (
    <div
      className="castom-card site-card-wrapper"
      style={{ backgroundImage: `url(${article.urlToImage})` }}
      onClick={handlerOpen && handlerOpen(article)}>

      <Meta
        className='card-news'
        title={article.title}
        description={article.description}
      />
      {handlerAddToRead
        && <Button className='btn-more' type="primary" shape="round"
          onClick={handlerAddToRead(article.title)}>
          add to reading list
        </Button>}

      {handlerRemove
        && <Popover content='Hide'>
          <Button type="primary" shape="round" className='btn-del'
            onClick={handlerRemove(article.title)}>
            <DeleteOutlined />
          </Button>
        </Popover>}
    </div>
  )
}

export const NewsItem = memo(NewsItemInner, (prevProps, nextPropx) => {
  return nextPropx.article.title === prevProps.article.title;
});