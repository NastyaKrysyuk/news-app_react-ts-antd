import React, { useEffect, useState } from 'react'
import SearchComponent from '../controls/serch';
import FilterComponent from '../controls/filter';
import { TNewsItem } from '../../type';
import NewsItems from '../news-items/news-items';

import { useAppSelector } from '../../hook/redux-hook';
import { useAppDispatch } from '../../hook/redux-hook';
import { fetchNewsList } from "../../store/actions/news";
import { Empty, Spin } from 'antd';
import './style.css'

const NewsList: React.FC = () => {
    const [search, setSearch] = useState("");
    const { articles, loading, error } = useAppSelector(state => state.newsList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNewsList('popularity'));
    }, [dispatch])

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
            {!loading &&
                filterBySearch(articles, search).length === 0 &&
                <Empty description={<p>No results were found for your search</p>} />}
            {articles &&
                !error &&
                !loading &&
                <NewsItems articles={filterBySearch(articles, search)} />
            }
        </div>
    )
}

export default NewsList;