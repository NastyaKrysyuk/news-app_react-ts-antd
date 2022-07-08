import { Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { TNewsItem } from "../../../type/type";

import { useNewsAsincContext } from "../../../context/news/useNewsContext";


import './style.css'

const SearchComponent : React.FC  = () => {

  const { handlerChangeSearch,search,searchNews } = useNewsAsincContext()
  const { Search } = Input;

  return (
<Search
 placeholder="input to search" 
 allowClear 
 style={{ width: '40%' }} 
 value={''}
 onChange={(_e:any)=>{
  searchNews(_e.target.value)
 }}
 />
  )
}
export default SearchComponent                                                                                                                                