/**
 * @description Slice de ajustes de la aplicación
 */

import {createSlice} from '@reduxjs/toolkit';
import type {TypeSettings} from '@app/ts/settings';

const INITIAL_STATE: TypeSettings = {
  language: null,
  colorMode: 'light',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: INITIAL_STATE,
  reducers: {
    setLanguageAction: (state, {payload}) => {
      state.language = payload;
    },
    setColorModeAction: (state, {payload}) => {
      state.colorMode = payload;
    },
  },
});

export const {setLanguageAction, setColorModeAction} = settingsSlice.actions;
export default settingsSlice.reducer;
