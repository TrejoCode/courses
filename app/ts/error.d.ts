/**
 * @description Declaración de los tipos de errores
 */

export type TypeErrorLog = {
  message: string;
  type?: 'info' | 'warn' | 'error';
  customAttributes?: Record<string, unknown> | null;
};

export type TypeUserIdentify = {
  idUser: string;
  customAttributes?: Record<string, unknown> | null;
};

export type TypeError = {
  errorName?: string;
  error: Error | null;
  customAttributes?: Record<string, unknown> | null;
};

export type TypeErrorProps = {
  title: string;
  message: string;
  loading?: boolean;
  buttonText?: string;
  onPress?: () => void;
};
