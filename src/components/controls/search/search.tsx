
import { Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { TNewsItem } from "../../../type/type";
import AppContext from "../../context/context";

import './style.css'

const SearchComponent : React.FC  = () => {
  const { Search } = Input;
  const context:any=useContext(AppContext)
// console.log(context.search)
  return (
<Search
 placeholder="input to search" 
 allowClear 
 style={{ width: '40%' }} 
 value={context.search}
 onChange={(_e:any)=>{
  context.handlerChangeSearch(_e.target.value)
 }}
 />
  )
}
export default SearchComponent                                                                                                                                