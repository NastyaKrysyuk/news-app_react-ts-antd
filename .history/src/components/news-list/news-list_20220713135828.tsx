import React, { useEffect, useState } from 'react'
import useNewsList from '../../hook/news-list.hook';
import SearchComponent from '../controls/serch';
import FilterComponent from '../controls/filter';
import { TNewsItem } from '../../type/type';
import NewsItem from '../news-item/news-item';
import { handlerPage, removeNews } from '../../store/slices/news-listSlices';

import { useAppSelector } from '../../hook/redux-hooks';
import { useAppDispatch } from '../../hook/redux-hooks';
import { Spin, notification } from 'antd';
import './style.css'
import { SmileOutlined } from '@ant-design/icons';
import { fetchNewsList } from '../../store/slices/news-listSlices';

const NewsList: React.FC = () => {

    const {articles ,loading, error,filter } = useAppSelector(state =>state.newsList );
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchNewsList('popularity'));
    }, [])

    // const { loading, error, articles, setArticles, filter, handlerPage } = useNewsList()
    const [search, setSearch] = useState("");

    const filterBySearch = (entities: [] | TNewsItem[], search: string) =>
        entities.filter((item: TNewsItem) => item.title.concat(item.description).includes(search));

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
                    filter={}
                />
            }
        </div>
    )
}

export default NewsList