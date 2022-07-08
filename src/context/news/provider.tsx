import { FC, useReducer, useState } from 'react';
import { NewsContext } from './news-context';
import Reducer, { initialStore } from './reducer';

export const NewsStore: FC<{ children: any }> = ({ children }) => {

	const [store, dispatch] = useReducer(Reducer, initialStore);

	//для поиска
	const [search, setSearch] = useState("");
  const handlerChangeSearch=(value:string)=>{
    setSearch(value)
  }

	console.log('NewsStore', store)
	return (
		<NewsContext.Provider value={{ store, dispatch, search, handlerChangeSearch}}>
			{children}
		</NewsContext.Provider>
	);
};