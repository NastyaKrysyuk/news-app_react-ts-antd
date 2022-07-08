import { useEffect } from 'react'

import NewsItem from '../news-item/news-item';
import './style.css'
import { Pagination, Spin } from 'antd';
import { useNewsAsincContext } from '../../context/news/useNewsContext';
import { TNewsItem } from '../../type/type';

const NewsList = () => {
    const { isLoading, filter, error, news, getNews, setFilter, removeNews,search } = useNewsAsincContext()

    useEffect(() => {
        if (!news.length) {
            getNews()
        }
    }, [])

    const handlerRemove = (title: string) => {
        return (_e: any) => {
            _e.stopPropagation();
            const arr: TNewsItem[] | [] = news.filter((el) => {
                return el.title !== title
            });
            removeNews(arr)
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
                !isLoading && news && news?.map((article) => {       
                        return (
                        <NewsItem
                            key={article.title}
                            handlerSearch={handlerRemove}
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