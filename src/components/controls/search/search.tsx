import { Input } from "antd";
import {useState} from "react";

import { useNewsAsyncContext } from "../../../context/news/useNewsContext";

import './style.css'
const { Search } = Input;

const SearchComponent : React.FC  = () => {
    const { queryInput, searchNews } = useNewsAsyncContext()
    const [state, setState] = useState(queryInput);
  console.log(state)
    const handlerSearch = (e: any) => {
        setState(e.target.value)
    }

    return (
        <Search
            placeholder="input to search"
            allowClear
            style={{ width: '40%' }}
            value={state}
            onChange={handlerSearch}
            onSearch={(_e: any) => searchNews(state)}
            onBlur={(_e: any) => searchNews(state)}
        />
    )
}
export default SearchComponent                                                                                                                                