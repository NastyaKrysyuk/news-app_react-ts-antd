import React, { useState } from 'react'
import useNewsList from './news-list.hook';
import SearchComponent from '../controls/serch';
import FilterComponent from '../controls/filter';
import { TNewsItem } from '../../type/type';
import NewsItem from '../news-item/news-item';

import { Spin, notification } from 'antd';
import './style.css'

const NewsList: React.FC = () => {

    const { loading, error, articles, setArticles, filter, handlerPage } = useNewsList()
    const [search, setSearch] = useState("");

    const filterBySearch = (entities: [] | TNewsItem[], search: string) =>
        entities.filter((item: TNewsItem) => item.title.concat(item.description).includes(search));

    const handlerRemove = (title: string) => {
        return (e: any) => {
            e.preventDefault();
            const arr: TNewsItem[] | null = articles.filter((el) => {
                return el.title !== title
            });
            setArticles(arr)
        };
    };

    const handlerAddtoRead = (title: string) => {
        return (e: any) => {
            e.preventDefault();
            const arr: TNewsItem | undefined = articles.find((el) => {
                return el.title === title
            });
            localStorage.setItem(title, JSON.stringify(arr))
            
        };
    };

    const handleSearch = (e: any) => setSearch(e.target.value);

    return (
        <div className='wrapper-news-list'>
            <SearchComponent
                search={search}
                handleSearch={handleSearch}
            />
            <FilterComponent />
            {error && "Error"}
            {loading && <div className="example"><Spin /></div>}
            {articles &&
                !error &&
                !loading &&
                <NewsItem
                    articles={filterBySearch(articles, search)}
                    handlerRemove={handlerRemove}
                    handlerAddToRead={handlerAddtoRead}
                    handlerPage={handlerPage}
                    filter={filter}
                />
            }
        </div>
    )
}

export default NewsList