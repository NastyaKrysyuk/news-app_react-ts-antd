import { TypedUseSelectorHook, useDispatch, useSelector } from 're';
import { AppDispatch, RootState } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;