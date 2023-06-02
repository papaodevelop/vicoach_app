import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosClient';
import {ListApiResponse} from '../../../types/Common';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {CourseDetail} from '../../../types/CourseDetail';
import {Auth, ForgotPass, Payloadregiter} from '../../../types/Auth';

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
    getQuizz: build.mutation<
      getQuizType,
      {idCourse: undefined | number; idItem: undefined | number}
    >({
      query({idCourse, idItem}) {
        return {
          url: `course-list/take-quiz/${idCourse}/${idItem}`,
          method: 'POST',
        };
      },
      invalidatesTags: result => [{type: tagTypes, id: result?.id}],
    }),
    subMitQuiz: build.mutation({
      query(data) {
        return {
          url: `course-list/submit-single-quiz`,
          method: 'POST',
          data,
        };
      },
      invalidatesTags: result => [{type: tagTypes, id: result?.id}],
    }),
  }),
});

export const {
  useLogoutMutation,
  useRefreshMutation,
  useGetCategoryQuery,
  useGetClassCourseQuery,
  useGetCourseSearchQuery,
  useGetdetailCourseQuery,
  useGetReviewCouresQuery,
  useGetDetailClassifyQuery,
  useGetCouseListQuery,
  useRegisterMutation,
  useForgotpwMutation,
  useGetProfileQuery,
  useGetQuizzMutation,
  useSubMitQuizMutation,
} = authApi;
