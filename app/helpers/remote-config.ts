/**
 * @description Funcionalidades adicionales para remote config
 */

import Config from 'react-native-config';
import {getVersion} from 'react-native-device-info';
import {getRemoteConfig} from '@react-native-firebase/remote-config';
import type {FirebaseRemoteConfigTypes} from '@react-native-firebase/remote-config';

const RNFRemoteConfig = getRemoteConfig();

// Remote config: Valores por defectos, para el uso en local si no se obtienen valores remotos, se cargan desde los envs
const REMOTE_CONFIG_DEFAULT_KEYS = {
  COURSES_APP_ENABLE_UPDATES: 'COURSES_APP_ENABLE_UPDATES',
  COURSES_APP_VERSION: 'COURSES_APP_VERSION',
};

const REMOTE_CONFIG_DEFAULT_VALUES = {
  COURSES_APP_VERSION: Config.COURSES_APP_VERSION || getVersion(),
  COURSES_APP_ENABLE_UPDATES: Config.COURSES_APP_ENABLE_UPDATES || false,
};

/**
 * @description Inicializa Firebase Remote Config con valores predeterminados y obtiene configuraciones remotas.
 * @returns {Promise<void>} Una promesa que se resuelve cuando la inicialización está completa.
 */
const initializeRemoteConfig = async (): Promise<void> => {
  try {
    // Establece valores predeterminados
    await RNFRemoteConfig.setDefaults({
      ...REMOTE_CONFIG_DEFAULT_VALUES,
    });

    // Descarga los datos de configuración remota y los almacena en caché durante 15 minutos para producción y 5 minutos para desarrollo
    await RNFRemoteConfig.fetch(__DEV__ ? 300 : 900);

    // Activa los datos obtenidos, resolviendo con un booleano que indica el estado de activación
    const activated = await RNFRemoteConfig.activate();

    // Registra el estado de activación para verificación en desarrollo
    if (__DEV__) {
      console.info(
        (activated ?? false)
          ? 'Fireabase remote config: Descargado y activado correctamente'
          : 'Fireabase remote config: Descargado y previamente activado',
      );
    }
  } catch (error) {
    console.warn('Error al inicializar la configuración remota', error);
  }
};

/**
 * @description Recupera el estado de la última recuperación de datos de configuración remota.
 * @returns {'success' | 'failure' | 'no_fetch_yet' | 'throttled'} El estado de la última recuperación de datos de configuración remota.
 */
export const getFetchStatus =
  (): FirebaseRemoteConfigTypes.LastFetchStatusType => {
    return RNFRemoteConfig.lastFetchStatus;
  };

/**
 * @description Recupera un valor específico de configuración remota basado en la clave proporcionada.
 * @param {string} key - La clave para el valor de configuración remota deseado.
 * @returns {FirebaseRemoteConfigTypes.ConfigValue | null | undefined} El valor de configuración remota recuperado o null si no se encuentra.
 */
const getRemoteValue = (
  key: string,
): FirebaseRemoteConfigTypes.ConfigValue | null | undefined => {
  try {
    const value = RNFRemoteConfig.getValue(key);
    return value ? value : null;
  } catch (error) {
    console.warn('Error al obtener el valor remoto', error);
  }
};

/**
 * @description Recupera todos los valores remotos
 * @returns {[key: string]: FirebaseRemoteConfigTypes.ConfigValue} Todos los valores remotos
 */
const getAllRemoteValues = (): Record<
  string,
  FirebaseRemoteConfigTypes.ConfigValue
> => RNFRemoteConfig.getAll();

export const remoteConfigHelpers = {
  getRemoteValue,
  getFetchStatus,
  getAllRemoteValues,
  initializeRemoteConfig,
  REMOTE_CONFIG_DEFAULT_KEYS,
  REMOTE_CONFIG_DEFAULT_VALUES,
};
