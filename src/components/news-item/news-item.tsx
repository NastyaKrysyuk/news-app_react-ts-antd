import { DeleteOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Card, Col, notification, Pagination, Popover, Row, Skeleton } from 'antd';
import { FC, memo, SyntheticEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook/redux-hooks';
import { addToRead, openArticle, removeNewsItem } from '../../store/slices/news-listSlices';
import { TNewsItem } from '../../type/type';

const { Meta } = Card;

type TProps = {
  article: TNewsItem,
}
const NewsItem: FC<TProps> = ({ article}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  
  const handlerAddToRead = (title: string) => {
    return (e: any) => {
      e.stopPropagation()
      dispatch(addToRead(title))
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

  const handlerOpen = (article: TNewsItem) => (_e: any) => {
    navigate(`/${article.title}`)
    dispatch(openArticle(article))
  }


  return (
    <div
      className="castom-card site-card-wrapper"
      style={{ backgroundImage: `url(${article.urlToImage})` }}
      onClick={handlerOpen && handlerOpen(article)}>
      <Meta className='card-news' title={article.title} description={article.description} />
      {handlerAddToRead && (
        <Button className='btn-more' type="primary" shape="round"
          onClick={handlerAddToRead(article.title)}>
          add to reading list
        </Button>
      )}
      {handlerRemove && <Popover content='Hide'>
        <Button type="primary" shape="round" className='btn-del'
          onClick={handlerRemove(article.title)}>
          <DeleteOutlined />
        </Button>
      </Popover>}
    </div>
  )
}

export default  NewsItem