import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  Auth,
  ForgotPass,
  PayloadLogin,
  Payloadregiter,
} from '../../../types/Auth';
import {BASE_URL} from '../../Api/BaseURL';
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: build => ({
    login: build.mutation<Auth, PayloadLogin>({
      query(data) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: data,
        };
      },
    }),
    register: build.mutation<Auth, Payloadregiter>({
      query(data) {
        return {
          url: 'auth/register',
          method: 'POST',
          body: data,
        };
      },
    }),
    forgotpw: build.mutation<Auth, ForgotPass>({
      query(data) {
        return {
          url: 'auth/forgot-password',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation, useForgotpwMutation} =
  loginApi;
