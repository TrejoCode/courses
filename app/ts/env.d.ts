/**
 * @description Declaración de los tipos para las variables de entorno
 */

declare module 'react-native-config' {
  export interface NativeConfig {
    APP_SENTRY_DSN: string;
    APP_ENVIRONMENT: string;
    APP_API_BASE_URL: string;
    COURSES_APP_ENABLE_UPDATES: boolean;
  }

  export const Config: NativeConfig;
  export default Config;
}
