import React, { useState, useEffect, useContext } from 'react'
import AppContext from '../context/context'
import useNewsList from './news-list.hook';

import NewsItem from '../news-item/news-item';
import './style.css'
import { Pagination, Spin } from 'antd';
import { TNewsItem } from '../../type/type';

const NewsList = () => {
    const { loading, error, articles, filter, handlerPage, setArticles } = useNewsList({ pageSize: 6 })
    
    const context:any=useContext(AppContext)
    console.log(context.search)
    const handlerRemove = (title:string) => {
        return (_e:any) => {
          console.log(`Клик по ${title} удалить`)
          _e.stopPropagation();
          const arr: TNewsItem[]|null= articles.filter((el) => {
            return el.title !== title
          });
          setArticles(arr)
        };
      };
     
    return (
        <div className='wrapper-news-list'>
            {error && "Error"}
            {loading && <div className="example"><Spin /></div>}
            {articles &&
                !error &&
                !loading && articles && articles?.map((article, index) => {
                    return (
                        article.urlToImage !== '' && index >= filter.minIndex &&
                        index < filter.maxIndex && article.title.includes(context.search) && <NewsItem
                            key={article.title}
                            handlerSearch={handlerRemove}
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                        />
                    )
                })}
            <Pagination
                current={filter.current}
                onChange={handlerPage}
                total={articles?.length}
            />
        </div>
    )
}

export default NewsList