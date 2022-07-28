import { DeleteOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Popover } from 'antd';
import { FC, memo } from 'react';
import { TNewsItem } from '../../type/type';

const { Meta } = Card;

type TProps = {
  article: TNewsItem,
  handlerOpen?: any,
  handlerAddToRead?: any,
  handlerRemove?: any
}
const NewsItem: FC<TProps> = ({ article, handlerOpen, handlerAddToRead, handlerRemove }) => {
  return (
 
    <div
      className="castom-card site-card-wrapper"
      style={{ backgroundImage: `url(${article.urlToImage})` }}
      onClick={handlerOpen && handlerOpen(article)}
    > 
       
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

export default NewsItem;