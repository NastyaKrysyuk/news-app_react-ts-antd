import { useEffect } from 'react'

import NewsItem from '../news-item/news-item';
import './style.css'
import { Pagination, Spin } from 'antd';
import { useNewsAsyncContext } from '../../context/news/useNewsContext';
import { TNewsItem } from '../../type/type';

const NewsList = () => {
    const { isLoading, filter, error, news, getNews, setFilter, removeNews, queryInput } = useNewsAsyncContext()

    useEffect(() => {
        if (!news.length) {
            getNews()
        }
    }, [])

    const handlerAddtoRead = (title: string) => {
        return (e: any) => {
            e.preventDefault();
            const arr: any= news.find((el) => {
                return el.title == title
            });
            localStorage.setItem(title,JSON.stringify(arr))
        };
    };

    const handlerPagination = (page: number, pageSize: number) => {
        //отправь запрос по ...&page=page&pageSize=9
        setFilter({ ...filter, page: page, pageSize: pageSize })
    }

    return (
        <div className='wrapper-news-list'>
            {error && "Error"}
            {isLoading && <div className="example"><Spin /></div>}
            {news &&
                !error &&
                !isLoading && news?.map((article) => {
                    return (
                        <NewsItem
                            key={article.title}
                            handlerAddtoRead={handlerAddtoRead}
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}  />
                    )
                })}
            <Pagination
                current={filter.page}
                pageSize={filter.pageSize}
                onChange={handlerPagination}
                total={filter.count}
                style={{ width: '100%', textAlign:'center' }} 
            />
        </div>
    )
}

export default NewsList