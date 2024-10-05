/**
 * @description Funcionalidades para la internacionalización (i18n) de la aplicación
 */

import {store} from '@app/redux/store';
import type {LanguageDetectorModule} from 'i18next';
import {Platform, NativeModules} from 'react-native';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  init: () => {},
  detect: () => {
    const storedLanguage = store.getState().settings.language;
    const locale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier;
    const currentLanguage = storedLanguage ?? locale.split('_')[0] ?? 'es';
    return currentLanguage;
  },
  cacheUserLanguage: () => {},
};

export const i18nHelpers = {
  languageDetector,
};
