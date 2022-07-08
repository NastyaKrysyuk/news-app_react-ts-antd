import { createContext, Dispatch } from 'react';
import { NewsStore, initialStore } from './reducer';

type Context = Partial<{ store: NewsStore; dispatch: Dispatch<any> ; search:any, handlerChangeSearch:any}>;

export const NewsContext = createContext<Context>({
	store: initialStore,
});