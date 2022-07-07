import AppContext from "./context";
import { FC, useState } from "react";

const MyProvider: FC<{ children: any }> = ({ children }) => {
  const [search, setSearch] = useState("");

  const handlerChangeSearch=(value:string)=>{
    setSearch(value)
  }
  
  return (
    <AppContext.Provider value={{ search: search, handlerChangeSearch: handlerChangeSearch }}>
      {children}
    </AppContext.Provider>
  )
}

export default MyProvider