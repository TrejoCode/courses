/**
 * @description Funcionalidades adicionales para native-base
 */

import {errorHelpers} from '@app/helpers/errors';
import type {StorageManager, ColorMode} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @description Persistir y recuperar el theme color mode de light a dark
 */
export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const storageTheme = await AsyncStorage.getItem(
        '@trejocode_courses_theme',
      );
      return storageTheme === 'dark' ? 'dark' : 'light';
    } catch (error: any) {
      errorHelpers.reportError(error);
      return 'light';
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem('@trejocode_courses_theme', value ?? 'light');
    } catch (error: any) {
      errorHelpers.reportError(error);
    }
  },
};

export const nativeBaseHelpers = {
  colorModeManager,
};
