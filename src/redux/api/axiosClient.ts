import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import type {AxiosRequestConfig, AxiosError} from 'axios';
import {BASE_URL} from '../../Api/BaseURL';
import {useRefreshMutation} from './auth.api';
import {Auth} from '../../../types/Auth';
import {setAuth} from '../state/auth.slice';
export const axiosAuth = (auth: Auth) => {
  // const auths = useAppSelector(data => data.auths.auth) as Auth;
  console.log(auth, 's');

  axios.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
      // Do something before request is sent
      config.headers.Accept = 'application/json';
      // config.headers.Cookie = `Bearer ${auths.apiToken}`;

      return config;
    },
    function (error: AxiosError) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
};

axios.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) {
      const [refreshToken] = useRefreshMutation();
      refreshToken({}).then(response => {
        const auth = response as unknown as Auth;
        axiosAuth(auth);
        setAuth(auth);
      });
    }
    // Do something with response error
    return Promise.reject(error);
  },
);

export const axiosBaseQuery =
  (
    {baseUrl}: {baseUrl: string} = {baseUrl: BASE_URL},
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
  async ({url, method, data, params}) => {
    try {
      const result = await axios({url: baseUrl + url, method, data, params});

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
