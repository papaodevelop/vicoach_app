import {createApi} from '@reduxjs/toolkit/query/react';
import {ListApiResponse} from '../../../types/Common';
import {axiosBaseQuery} from './axiosClient';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {CourseDetail} from '../../../types/CourseDetail';
const tagTypes = 'category' as const;
export const categoryAPI = createApi({
  reducerPath: 'categoryAPI',
  tagTypes: [tagTypes],
  baseQuery: axiosBaseQuery(),
  endpoints: build => ({
    getCategory: build.query<ListApiResponse<CourseCategoryType>, string>({
      query: (queryString = '') => ({
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
    getClassCourse: build.query<ListApiResponse<CourseCategoryType>, string>({
      query: (queryString = '') => ({
        url: `student/class-course`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const classCourse = result.data;
          return [
            ...classCourse.map(({id}) => ({
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
    getCourseSearch: build.query<ListApiResponse<CourseCategoryType>, string>({
      query: queryString => ({
        url: `course-list?search=${queryString}`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const courseSearch = result.data;
          return [
            ...courseSearch.map(({id}) => ({
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
    getdetailCourse: build.query<CourseDetail, string>({
      query: queryString => ({
        url: `course-list/${queryString}`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const detailCourse = result.data;
          return [
            ...detailCourse.map(({id}) => ({
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
    getReviewCoures: build.query<ListApiResponse<CoursesReview>, string>({
      query: queryString => ({
        url: `class-course/${queryString}/reviews`,
        method: 'GET',
        timeout: 5000,
      }),
      providesTags(result) {
        if (result?.data) {
          const courseReview = result.data;
          return [
            ...courseReview.map(({id}) => ({
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
    getDetailClassify: build.query<ListApiResponse<DetailClassify>, string>({
      query: queryString => ({
        url: `course-list/?category_id[]=${queryString}`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const detailClassify = result.data;
          return [
            ...detailClassify.map(({id}) => ({
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
export const {
  useGetCategoryQuery,
  useGetClassCourseQuery,
  useGetCourseSearchQuery,
  useGetdetailCourseQuery,
  useGetReviewCouresQuery,
  useGetDetailClassifyQuery,
} = categoryAPI;
