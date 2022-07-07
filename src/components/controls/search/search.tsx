
import { Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { TNewsItem } from "../../../type/type";
import AppContext from "../../context/context";

import './style.css'

const SearchComponent : React.FC  = () => {
  const { Search } = Input;
  const context:any=useContext(AppContext)
  const [search, setSearch] = useState("");

 console.log(context.articles)

useEffect(()=>{
  const arr=context?.articles.filter((item:TNewsItem) =>item.description.includes(search));
  context.setArticles(arr)
},[search])

  return (
<Search
 placeholder="input to search" 
 allowClear 
 style={{ width: '40%' }} 
 value={search}
 onChange={(_e:any)=>{
  setSearch(_e.target.value)
 }}
 />
  )
}
export default SearchComponent                                                                                                                                