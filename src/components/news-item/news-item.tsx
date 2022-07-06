
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Col, Popover, Row } from 'antd';
import './style.css'

const NewsItem = ({ title, description, url, urlToImage }: {
  title: string,
  description: string,
  url: string,
  urlToImage: string,
}) => {
  return (
    <div className="site-card-wrapper" style={{ backgroundImage: `url(${urlToImage})` }}>
      <a href={url}>
        <Row gutter={1} style={{ display: 'block' }}>
          <Col >
            <Card className='card-news' title={title} bordered={false} >
              {description}
            </Card>
          </Col>
        </Row>
        <Button className='btn-more' type="primary" shape="round" onClick={(_e: any) => { _e.preventDefault() }}>
          add to reading list
        </Button>
      </a>
      <Popover content='Hide'>
        <Button type="primary" shape="round" className='btn-del' onClick={(_e: any) => { _e.preventDefault() }}>
          <DeleteOutlined />
        </Button>
      </Popover>
    </div>

  )
}

export default NewsItem