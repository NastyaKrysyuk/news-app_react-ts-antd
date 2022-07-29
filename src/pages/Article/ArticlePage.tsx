import { useAppSelector } from "../../hook/redux-hook";
import { Button, Card, Image, Typography } from 'antd';
import './style.css'
import { ArrowLeftOutlined, LinkOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const ArticlePage = () => {
  const navigate = useNavigate();

  const article = useAppSelector((state) => state.newsList.article)
  const handlerBack = (_e: any) => {
    navigate(-1);
  }

  return (
    <article className="article">
      <Card
        title={
          <div>
            <span className="arrow-back">
              <ArrowLeftOutlined onClick={handlerBack} />
            </span>{article?.title}
          </div>
        }
        bordered={false} >
        <Title >{article?.description}</Title>
        <div className="pablish-date">
          <Text type="secondary" italic={true}>
            by {article?.author}
          </Text><br />
          <Text type="secondary" italic={true}>
            {article?.publishedAt.toString().slice(0, 10)}
          </Text>
        </div>
        <Image src={article?.urlToImage} />
        <p>{article?.content}</p>
        <Button
          className='btn-article'
          type="primary"
          shape="round"
          icon={<LinkOutlined />}
          href={article?.url}>
          Read more
        </Button>
      </Card>
    </article>
  )
}
export default ArticlePage