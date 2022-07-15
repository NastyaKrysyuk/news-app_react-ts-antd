import { useAppSelector } from "../../hook/redux-hooks";
import { Button, Card, Image, Typography } from 'antd';
import './style.css'
import { LinkOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const ArticlePage = () => {

  const article = useAppSelector((state) => state.newsList.article)

  return (
    <article className="article">
      <Card title={article?.title} bordered={false} >
        <Title >{article?.description}</Title>
        <div className="pablish-date">
          <Text type="secondary" italic={true} >by {article?.author}</Text><br />
          <Text type="secondary" italic={true} >{article?.publishedAt.toString().slice(0, 10)}</Text>
        </div>
        <Image src={article?.urlToImage} />
        <p>{article?.content}</p>
        <Button
          className='btn-article'
          type="primary"
          shape="round"
          icon={<LinkOutlined />}
          href={article?.url} >
          Read more
        </Button>
      </Card>
    </article>
  )
}
export default ArticlePage