import {createApi} from '@reduxjs/toolkit/query/react';
import {ListApiResponse} from '../../../types/Common';
import {axiosBaseQuery} from './axiosClient';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
const tagTypes = 'category' as const;
export const categoryAPI = createApi({
  reducerPath: 'categoryAPI',
  tagTypes: [tagTypes],
  baseQuery: axiosBaseQuery(),
  endpoints: build => ({
    getCategory: build.query<ListApiResponse<CourseCategoryType>, string>({
      query: (queryString: string = '') => ({
        url: `home?${queryString}`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const category = result.data;
          return [
            ...category.map(({id}) => ({
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

export const {useGetCategoryQuery} = categoryAPI;
