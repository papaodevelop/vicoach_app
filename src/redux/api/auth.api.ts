import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosClient';

const tagTypes = 'Auth' as const;

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: [tagTypes],
  baseQuery: axiosBaseQuery(),
  endpoints: build => ({
    logout: build.mutation<{}, {}>({
      query() {
        return {
          url: 'auth/logout',
          method: 'POST',
        };
      },
    }),
    refresh: build.mutation({
      query() {
        return {
          url: 'auth/refresh',
          method: 'POST',
        };
      },
    }),
  }),
});

export const {useLogoutMutation, useRefreshMutation} = authApi;
