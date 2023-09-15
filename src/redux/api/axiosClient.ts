import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import type {AxiosRequestConfig, AxiosError} from 'axios';
import {BASE_URL} from '../../Api/BaseURL';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {Alert} from 'react-native';
import {navigate} from '../../../RootNavigation';
export const axiosAuth = () => {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

  const auths = useAppSelect(data => data.getAuth.auth);
  axios.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
      // config.headers.Referer = 'https://khoahoc.phanmemmkt.vn';
      config.headers.Accept = 'application/json';
      config.headers.Cookie = auths;
      return config;
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    },
  );
};
axios.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) {
      Alert.alert(
        'Bạn đã hết hạn đăng nhập, vui lòng đăng nhập lại để tiếp tục',
        ' ',
        [{text: 'Đồng ý', onPress: () => navigate('Login')}],
      );
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
      timeout?: AxiosRequestConfig['timeout'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({url, method, data, params, timeout, headers}) => {
    const newHeaders = {
      ...headers,
      // Referer: 'https://khoahoc.phanmemmkt.vn', // Thay đổi thành giá trị Referer bạn muốn sử dụng
      Referer: 'https://khoahoc.phanmemmkt.vn',
    };
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        timeout,
        headers: newHeaders,
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
