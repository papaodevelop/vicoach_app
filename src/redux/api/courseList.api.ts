import {createApi} from '@reduxjs/toolkit/query/react';
import {ListApiResponse} from '../../../types/Common';
import {axiosBaseQuery} from './axiosClient';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {CourseDetail} from '../../../types/CourseDetail';
const tagTypes = 'courseListApi' as const;
export const courseListApi = createApi({
  reducerPath: 'courseListApi',
  tagTypes: [tagTypes],
  baseQuery: axiosBaseQuery(),
  endpoints: build => ({
    getCouseList: build.query<CourseListType, string>({
      query: queryString => ({
        url: `course-list/learning/${queryString}`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const couseList = result.data;
          return [
            ...couseList.map(({id}) => ({
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
export const {useGetCouseListQuery} = courseListApi;
