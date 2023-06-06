import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import type {AxiosRequestConfig, AxiosError} from 'axios';
import {BASE_URL} from '../../Api/BaseURL';
import {useRefreshMutation} from './auth.api';
import {Auth} from '../../../types/Auth';
import {setAuth} from '../state/auth.slice';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../store/store';
export const axiosAuth = () => {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

  const auths = useAppSelect(data => data.getAuth.auth);
  axios.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
      // Do something before request is sent
      config.headers.Accept = 'application/json';
      config.headers.Cookie = auths;
      return config;
    },
    function (error: AxiosError) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
};
export const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: BASE_URL},
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      timeout?: AxiosRequestConfig['timeout'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({url, method, data, params, timeout, headers}) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        timeout,
        headers,
      });

      return {data: result.data};
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
