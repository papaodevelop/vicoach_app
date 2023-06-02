import {createApi} from '@reduxjs/toolkit/query/react';
import {ListApiResponse} from '../../../types/Common';
import {axiosBaseQuery} from './axiosClient';
const tagTypes = 'profile' as const;
export const profileApi = createApi({
  reducerPath: 'profileApi',
  tagTypes: [tagTypes],
  baseQuery: axiosBaseQuery(),
  endpoints: build => ({
    getProfile: build.query<ProfileType, string>({
      query: (queryString: string = '') => ({
        url: `users/profile-settings?${queryString}`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const profile = result.data;
          return [
            ...profile.map(({id}) => ({
              type: tagTypes,
              id,
            })),
            {
              type: tagTypes,
              id: 'LIST',
            },
          ];
        }
        return [{type: tagTypes, id: 'LIST'}];
      },
    }),
  }),
});

export const {useGetProfileQuery} = profileApi;
