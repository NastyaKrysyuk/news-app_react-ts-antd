
import { Button, Card, Col, Row } from 'antd';
import './style.css'

const NewsItem = ({ title, description, url, urlToImage }: {
  title: string,
  description: string,
  url: string,
  urlToImage: string,
}) => {
  return (
    <a href={url} className="site-card-wrapper" style={{ backgroundImage: `url(${urlToImage})`}}>
      <Row gutter={1} style={{display:'block'}}>
        <Col >
            <Card className='card-news' title={title} bordered={false} >
              {description}
            </Card>
        </Col>
      </Row>
      <Button className='btn-more' type="primary" shape="round" >
            view more
      </Button>
    </a>
  )
}

export default NewsItem