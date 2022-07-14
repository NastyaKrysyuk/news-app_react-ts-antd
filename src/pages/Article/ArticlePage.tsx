import { useAppSelector } from "../../hook/redux-hooks";
import { Button, Card, Image } from 'antd';
import './style.css'

const ArticlePage = () => {
  const article = useAppSelector((state) => state.newsList.article)
  return (
    <article className="article">
      <Card title={article?.title} bordered={false} style={{ width: '60%', margin: '5rem auto' , borderRadius:'15px'}}>
        <p>{article?.description}</p>
        <Image
          src={article?.urlToImage}
        />
        <p>{ article?.content}</p>
        <Button className='btn-more ' type="primary" shape="round" >
                Read more
              </Button>
      </Card>
    </article>
  )
}
export default ArticlePage