/**
 * @description Funcionalidades adicionales para la navegación de la aplicación
 */

import i18next from 'i18next';
import {errorHelpers} from './errors';
import {store} from '@app/redux/store';
import {MutableRefObject} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import analytics from '@react-native-firebase/analytics';

/**
 * @description Maneja la aparición de RNBootSplash y la configuración inicial del idioma
 * @param {ReactMutableRefObject<undefined>} routeNameRef - Referencia mutable al nombre de la ruta.
 * @param {any} navigationRef - Referencia a la navegación.
 */
const handleNavigationReady = (
  routeNameRef: MutableRefObject<undefined>,
  navigationRef: any,
) => {
  const storedLanguage = store.getState().settings.language;
  i18next.changeLanguage((storedLanguage as string) ?? 'es');
  RNBootSplash.hide({fade: true});
  routeNameRef.current = navigationRef.current.getCurrentRoute()?.name;
};

/**
 * @description Maneja el registro de visualización de pantalla en la Analytics.
 * @param {string} currentRouteName - Nombre de la pantalla actual.
 * @param {string | undefined} previousRouteName - Nombre de la pantalla anterior.
 */
const handleNavigationStateChange = async (
  currentRouteName: string,
  previousRouteName: string | undefined,
): Promise<void> => {
  if (previousRouteName !== currentRouteName) {
    const analyticsParams = {
      screen_name: currentRouteName,
      screen_class: currentRouteName,
    };

    try {
      await analytics().logScreenView(analyticsParams);
    } catch (error: any) {
      errorHelpers.reportError(error);
    }
  }
};

export const navigationHelpers = {
  handleNavigationReady,
  handleNavigationStateChange,
};
