import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from '../store/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const   dispatch = useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;