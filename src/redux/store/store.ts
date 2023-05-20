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
import {useDispatch} from 'react-redux';
const reducers = combineReducers({
  [loginApi.reducerPath]: loginApi.reducer,
  getcheck: getCheck,
  getQuizz: getQuizz,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['getQuizz'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loginApi.middleware);
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch as () => AppDispatch;
export default store;
