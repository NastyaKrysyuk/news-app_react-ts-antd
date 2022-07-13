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
 console.log(articles)
 console.log(loading)
 console.log(error)

    useEffect(()=>{
        dispatch(fetchNewsList('popularity'));
    }, [])

    // const { loading, error, articles, setArticles, filter, handlerPage } = useNewsList()
    const [search, setSearch] = useState("");

    const filterBySearch = (entities: [] | TNewsItem[], search: string) =>
        entities.filter((item: TNewsItem) => item.title.concat(item.description).includes(search));

    // const handlerRemove = (title: string) => {
    //     return (e: any) => {
    //         e.preventDefault();
    //         const arr: TNewsItem[] | null = articles.filter((el) => {
    //             return el.title !== title
    //         });
    //         setArticles(arr)
    //     };
    // };

    const handlerAddtoRead = (title: string) => {
        return (e: any) => {
            e.preventDefault();
            const arr: TNewsItem | undefined = articles.find((el) => {
                return el.title === title
            });
            localStorage.setItem(title, JSON.stringify(arr))
            notification.open({
                message: 'Article added to reading list :)',
                  icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                  placement:'top',
              });
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
                    handlerAddToRead={null}
                    handlerPage={dispatch(handlerPage)}
                    filter={filter}
                />
            }
        </div>
    )
}

export default NewsList