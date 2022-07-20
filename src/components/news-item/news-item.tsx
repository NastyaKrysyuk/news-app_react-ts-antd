import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, notification, Pagination, Popover, Row } from 'antd';
import { FC, SyntheticEvent } from 'react';
import { TNewsItem } from '../../type/type';


type TProps = {
  article: TNewsItem,
  handlerOpen?: (article: TNewsItem) => (e: SyntheticEvent) => void,
  handlerAddToRead?: (title: string) => (e: SyntheticEvent) => void,
  handlerRemove?:  (title: string) => (e: SyntheticEvent) => void
}
const NewsItem: FC<TProps> = ({ article, handlerOpen, handlerAddToRead, handlerRemove }) => {
  return (
    <div
      className="castom-card site-card-wrapper"
      style={{ backgroundImage: `url(${article.urlToImage})` }}
      onClick={handlerOpen && handlerOpen(article)}>
      <Row gutter={1} style={{ display: 'block' }}>
        <Col >
          <Card className='card-news' title={article.title} bordered={false} >
            {article.description}
          </Card>
        </Col>
      </Row>
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