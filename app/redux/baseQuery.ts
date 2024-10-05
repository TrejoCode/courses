/**
 * @description Configuración de baseQuery para axios
 */

import axios from 'axios';
import {errorHelpers} from '@app/helpers/errors';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import type {AxiosRequestConfig, AxiosError} from 'axios';

const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: ''},
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({url, method, data, params}: AxiosRequestConfig) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        timeout: 60000,
      });
      return {data: result.data};
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      errorHelpers.reportError({
        error: err,
        errorName: err?.config?.url ?? 'Network error',
        customAttributes: {
          data: data ?? {},
          params: params ?? {},
          status: err.response?.status || 'Unknown',
          url: err.config?.url ?? "Endpoint wasn't provided",
        },
      });
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
