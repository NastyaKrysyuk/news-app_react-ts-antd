import { useAppSelector } from "../../hook/redux-hooks";
import { Button, Card, Image, Typography } from 'antd';
import './style.css'
import { LinkOutlined } from "@ant-design/icons";
import { url } from "inspector";
const { Text } = Typography;
const ArticlePage = () => {
  const article = useAppSelector((state) => state.newsList.article)
  return (
    <article className="article">
      <Card title={article?.title} bordered={false} style={{ width: '60%', margin: '5rem auto' , borderRadius:'15px'}}>
        <p className="description">{article?.description}</p>
        <Text type="secondary" italic={true} >by {article?.author}</Text><br/>
        <Text type="secondary" italic={true} >{article?.publishedAt.toString().slice(0,10)}</Text>
        <Image
          src={article?.urlToImage}
        />
        <p>{ article?.content}</p>
        <Button className='btn-article' type="primary" shape="round" icon={<LinkOutlined />} href={article?.url} >
                Read more
              </Button>
      </Card>
    </article>
  )
}
export default ArticlePage