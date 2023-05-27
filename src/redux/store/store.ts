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
import {loginApi} from '../api/login.api';
import {profileApi} from '../api/profile.api';
import {categoryAPI} from '../api/courseCategory.api';
import {useDispatch} from 'react-redux';
import getdataUser from '../state/login.slice';
import {courseListApi} from '../api/courseList.api';
import getAuth from '../state/auth.slice';
import getCart from '../state/cart.reducer';
const reducers = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  getcheck: getCheck,
  getQuizz: getQuizz,
  getdataUser: getdataUser,
  getAuth: getAuth,
  [categoryAPI.reducerPath]: categoryAPI.reducer,
  getCart: getCart,
  [courseListApi.reducerPath]: courseListApi.reducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'getQuizz',
    loginApi.reducerPath,
    'getAuth',
    profileApi.reducerPath,
    categoryAPI.reducerPath,
    courseListApi.reducerPath,
  ],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      loginApi.middleware,
      profileApi.middleware,
      categoryAPI.middleware,
      courseListApi.middleware,
    ]);
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch as () => AppDispatch;
export default store;
