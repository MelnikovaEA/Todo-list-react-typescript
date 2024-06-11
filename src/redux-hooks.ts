import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

//useAppSelector нужен если селекторы не типизируются по отдельности
//export const useAppSelector = useSelector.withTypes<RootState>();