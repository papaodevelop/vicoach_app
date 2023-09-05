import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import getCheck from '../state/Check.reducer';
import getQuizz from '../state/Quizz.reducer';
import {useDispatch} from 'react-redux';
import getdataUser from '../state/login.slice';
import getAuth from '../state/auth.slice';
import getCart from '../state/cart.reducer';
import getFavori from '../state/favorite';

import {authApi} from '../api/auth.api';
const reducers = combineReducers({
  getcheck: getCheck,
  getQuizz: getQuizz,
  getdataUser: getdataUser,
  getAuth: getAuth,
  getCart: getCart,
  [authApi.reducerPath]: authApi.reducer,
  getFavori: getFavori,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['getQuizz', authApi.reducerPath, 'getAuth'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([authApi.middleware]);
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch as () => AppDispatch;
export default store;
