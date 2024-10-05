/**
 * @description Todos los reducers de la aplicación
 */

import {baseApi} from './api';
import {combineReducers} from '@reduxjs/toolkit';

// Slices
import settingsSlice from './slices/settings.slice';

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  settings: settingsSlice,
});
