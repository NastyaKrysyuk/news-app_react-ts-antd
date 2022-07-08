import { Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { TNewsItem } from "../../../type/type";

import { useNewsAsincContext } from "../../../context/news/useNewsContext";


import './style.css'

const SearchComponent : React.FC  = () => {

  const { handlerChangeSearch,search } = useNewsAsincContext()
  const { Search } = Input;

  return (
<Search
 placeholder="input to search" 
 allowClear 
 style={{ width: '40%' }} 
 value={search}
 onChange={(_e:any)=>{
  handlerChangeSearch(_e.target.value)
 }}
 />
  )
}
export default SearchComponent                                                                                                                                