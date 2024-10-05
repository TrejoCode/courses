/**
 * @description Configuración de la internalización (i18n) de la aplicación
 */

import i18n from 'i18next';
import * as resources from './resources';
import {i18nHelpers} from '@app/helpers/i18n';
import {initReactI18next} from 'react-i18next';

const ns = Object.keys(Object.values(resources)[0]); // Obtiene los nombres de los espacios de nombres (namespaces) de los recursos
export const defaultNS = ns[0]; // Establece el primer espacio de nombres como el espacio de nombres predeterminado

i18n
  .use(i18nHelpers.languageDetector) // Utiliza el detector de idioma para React Native
  .use(initReactI18next)
  .init({
    ns, // Espacios de nombres disponibles
    defaultNS, // Espacio de nombres predeterminado
    fallbackLng: 'es', // Idioma de respaldo en caso de que no se encuentre una traducción
    compatibilityJSON: 'v3', // Utiliza el formato de compatibilidad con i18next v3
    supportedLngs: ['es', 'en'],
    interpolation: {
      escapeValue: false, // Permite que los valores interpolados (variables) contengan HTML sin escapar
    },
    debug: __DEV__, // Muestra mensajes de depuración en la consola
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {},
      ),
    },
  });
