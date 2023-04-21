import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import  getcheck  from '../state/Check.reducer';
const reducers =combineReducers({
    getcheck:getcheck
})
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist:['']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    //@ts-ignore
    devTools: process.env.NODE_ENV !== 'production',
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
          serializableCheck: false,
        }).concat([
         
        ]);
      },
  });

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
  export default store;