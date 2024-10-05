/**
 * @description Funcionalidades adicionales para la gestión de errores
 */

import crashlytics from '@react-native-firebase/crashlytics';
import {captureMessage, captureException} from '@sentry/react-native';
import type {TypeErrorLog, TypeUserIdentify, TypeError} from '@app/ts/error';

/**
 * @description Registra un log en Crashlytics y Sentry con opciones adicionales.
 * @param {string} message - El mensaje del log.
 */
const createLog = ({message = ''}: TypeErrorLog) => {
  try {
    // Registrar logs en crashlytics y Sentry
    captureMessage(message);
    crashlytics().log(message);
  } catch (error) {
    console.warn('Error al registrar el log:', error);
  }
};

/**
 * @description Asigna el identificar del usuario en Crashlytics y Sentry para el seguimiento de errores.
 * @param {string} [idUser='N/A'] - El id del usuario, debe ser un string único.
 */
export const setUserIdentify = async ({idUser = 'N/V'}: TypeUserIdentify) => {
  try {
    // Validar el id de usuario
    const id = idUser !== null && idUser !== undefined ? String(idUser) : 'N/V';

    // Identificar el usuario en Crashlytics
    crashlytics().setUserId(id);
  } catch (error) {
    console.warn('Error al registrar el usuario identificador:', error);
  }
};

/**
 * @description Registra un error en Crashlytics y Sentry.
 * @param {Error|null} [error=null] - El error a registrar, debe ser una instancia de Error.
 * @param {Object|null} [customAttributes=null] - Atributos personalizados del log.
 * @param {string} [errorName='Error desconocido'] - Nombre asignado al error en Crashlytics.
 */
export const reportError = async ({
  error = null,
  customAttributes = null,
  errorName = 'Error desconocido',
}: TypeError) => {
  try {
    if (error instanceof Error) {
      // Garantizar que customAttributes sea un objeto
      const validCustomAttributes =
        typeof customAttributes === 'object' && customAttributes !== null
          ? customAttributes
          : {};

      // Convertir objetos y arrays a cadenas JSON
      const sanitizedCustomAttributes: {[key: string]: string} = {};
      for (const key in validCustomAttributes) {
        if (Object.prototype.hasOwnProperty.call(validCustomAttributes, key)) {
          const value = validCustomAttributes[key];
          sanitizedCustomAttributes[key] =
            typeof value === 'object' ? JSON.stringify(value) : String(value);
        }
      }

      // Registrar en Crashlytics
      crashlytics().setAttributes(sanitizedCustomAttributes);
      crashlytics().recordError(error, errorName);

      // Registrar en Sentry
      captureException(error, sanitizedCustomAttributes);
    }
  } catch (catchError: any) {
    console.warn(
      'No fue posible registrar el error:',
      catchError?.message ?? 'Error desconocido',
    );
  }
};

export const errorHelpers = {
  createLog,
  reportError,
  setUserIdentify,
};
