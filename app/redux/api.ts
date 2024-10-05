/**
 * @description Configuración inicial de los API slices para RTK Query
 */

import Config from 'react-native-config';
import axiosBaseQuery from './baseQuery';
import {createApi} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({
    baseUrl: Config.APP_API_BASE_URL ?? '',
  }),
  endpoints: () => ({}),
});
