import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosClient';
import {ListApiResponse} from '../../../types/Common';
import {CourseCategoryType} from '../../../types/CourseCategoryType';
import {CourseDetail} from '../../../types/CourseDetail';
import {
  Auth,
  CoursesReviewsComment,
  ForgotPass,
  Payloadregiter,
} from '../../../types/Auth';
import {BASE_URL} from '../../Api/BaseURL';

const tagTypes = 'Auth' as const;
export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: [tagTypes],
  baseQuery: axiosBaseQuery({baseUrl: BASE_URL}),
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
    getCourse: build.query<ListApiResponse<CourseCategoryType>, string>({
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
    register: build.mutation({
      query(data) {
        return {
          url: `auth/register`,
          method: 'POST',
          data,
        };
      },
    }),
    forgotpw: build.mutation<Auth, ForgotPass>({
      query(data) {
        return {
          url: 'auth/forgot-password',
          method: 'POST',
          data,
        };
      },
    }),
    createReviewCourses: build.mutation<
      CoursesReviewsComment,
      {id: number | undefined; data: CoursesReviewsComment}
    >({
      query({id, data}) {
        return {
          url: `class-course/${id}/reviews`,
          method: 'POST',
          data,
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
    changePassWord: build.mutation({
      query(data) {
        return {
          url: `users/change-password`,
          method: 'PUT',
          data,
        };
      },
    }),
    settingProfile: build.mutation({
      query(data) {
        return {
          url: `users/profile-settings`,
          method: 'PUT',
          data,
        };
      },
      invalidatesTags: result => [{type: tagTypes, id: result?.id}],
    }),
    getProvinces: build.query({
      query: queryString => ({
        url: `country/provinces`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const detailClassify = result.data;
          return [
            ...detailClassify.map(({code}: Provinces) => ({
              type: tagTypes,
              code,
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
    getDistric: build.query({
      query: queryString => ({
        url: `country/districts/${queryString}`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const detailClassify = result.data;
          return [
            ...detailClassify.map(({code}: Provinces) => ({
              type: tagTypes,
              code,
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
    getBlogPost: build.query<Blog | undefined, string>({
      query: queryString => ({
        url: `blog/post/${queryString}`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const blog = result.data;
          return [
            ...blog.map(({id}) => ({
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
    getCommentBlog: build.query<ListApiResponse<Blog | undefined>, string>({
      query: queryString => ({
        url: `comments/${queryString}`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const comment = result.data;
          return [
            ...comment.map(({id}: any) => ({
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
    postComment: build.mutation({
      query(data: postComment) {
        return {
          url: `comments`,
          method: 'POST',
          data,
        };
      },
      invalidatesTags: result => [{type: tagTypes, id: result?.id}],
    }),
    deleteComment: build.mutation<ChildrenComment, {id: number | undefined}>({
      query({id}) {
        return {
          url: `comments/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: result => [{type: tagTypes, id: result?.id}],
    }),
    putFcmToken: build.mutation({
      query(data) {
        return {
          url: `notification/accept`,
          method: 'PUT',
          data,
        };
      },
    }),
    getallNotification: build.query<ListApiResponse<Notification>, string>({
      query: () => ({
        url: `notification`,
        method: 'GET',
      }),
      providesTags(result) {
        if (result?.data) {
          const notifi = result.data;
          return [
            ...notifi.map(({id}) => ({
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
    readNotifi: build.mutation({
      query(id: number | undefined) {
        return {
          url: `notification/${id}`,
          method: 'PUT',
        };
      },
      invalidatesTags: result => [{type: tagTypes, id: result?.id}],
    }),
    addCousesFree: build.mutation({
      query(slug) {
        return {
          url: `course-list/take-free-course/${slug}`,
          method: 'POST',
        };
      },
      invalidatesTags: result => [{type: tagTypes, id: result?.id}],
    }),
    deleteNotifi: build.mutation<ChildrenComment, {id: number | undefined}>({
      query({id}) {
        return {
          url: `notification/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: result => [{type: tagTypes, id: result?.id}],
    }),
    getTermPage: build.query<TermsPage, string>({
      query: queryString => ({
        url: `terms`,
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
    getStoreInfo: build.query<ListApiResponse<StoreInfo>, string>({
      query: queryString => ({
        url: `store-inform`,
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
  useChangePassWordMutation,
  useGetProvincesQuery,
  useGetDistricQuery,
  useSettingProfileMutation,
  useCreateReviewCoursesMutation,
  useGetBlogPostQuery,
  useGetCommentBlogQuery,
  usePostCommentMutation,
  useDeleteCommentMutation,
  usePutFcmTokenMutation,
  useGetallNotificationQuery,
  useReadNotifiMutation,
  useGetCourseQuery,
  useDeleteNotifiMutation,
  useGetTermPageQuery,
  useGetStoreInfoQuery,
  useAddCousesFreeMutation,
} = authApi;
