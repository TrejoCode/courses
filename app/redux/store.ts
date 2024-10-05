/**
 * @description Store general de la aplicación
 */

import {baseApi} from './api';
import {rootReducer} from './rootReducer';
import Reactotron from '../../ReactotronConfig';
import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  PURGE,
  FLUSH,
  PAUSE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';

const middlewares = [baseApi.middleware];

const persistConfig = {
  storage: AsyncStorage,
  whitelist: ['settings'],
  key: 'trejocode_courses',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(__DEV__ ? [Reactotron.createEnhancer!()] : []),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
