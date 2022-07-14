import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Col, Popover, Row } from "antd";
import NewsItem from "../../components/news-item";
import { TNewsItem } from "../../type/type";
import './style.css'


const ReadingListPage =()=>{
   let arr:[]| TNewsItem[]=[]

    for(let i=0; i<localStorage.length; i++) {
        let key:string |null = localStorage.key(i);
        //@ts-ignore
        let newsItem: null|TNewsItem=JSON.parse(localStorage.getItem(key))
        
        arr.push(
            //@ts-ignore
            newsItem
        )
        
      }
      
      
return (
    <div className='wrapper-news-list'>
    <NewsItem articles={arr}/>
    </div>)}
    
    {/* {console.log(arr)}
        {
        arr.map((article: TNewsItem, index: number) => (
          
          <div
            key={index}
            className="site-card-wrapper"
            style={{ backgroundImage: `url(${article.urlToImage})` }}
           >
              <Row gutter={1} style={{ display: 'block' }}>
                <Col >
                  <Card className='card-news' title={article.title} bordered={false} >
                    {article.description}
                  </Card>
                </Col>
              </Row>
              <Button className='btn-more' type="primary" shape="round" 
             >
                add to reading list
              </Button>
            <Popover content='Hide'>
              <Button type="primary" shape="round" className='btn-del'
                >
                <DeleteOutlined />
              </Button>
            </Popover>
          </div>
        ))
      } */}
   

export default ReadingListPage