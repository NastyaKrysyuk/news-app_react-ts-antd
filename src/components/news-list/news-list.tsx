import React, { useState, useEffect } from 'react'
import Newsapi from '../../services/config';
import { TNewsItem } from '../../type/type';
import NewsItem from '../news-item/news-item';
import './style.css'

const NewsList = () => {
  const [articles, setArticles] = useState<null | TNewsItem[]>(null)
  console.log(articles)

  useEffect(() => {
    Newsapi.getNews('?q=art%20painter&NFT&apiKey=e1f6d61fb3224655b09882e1f3fc11b4')
      .then((res: any) => { setArticles(res.articles) })
  }, [])


  return (
    <div className='wrapper-news-list'>
        {articles && articles?.map((article) => {
            return(
                article.urlToImage !== '' && <NewsItem 
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage} 
                />
            )
        })}
    </div>
)
}

export default NewsList