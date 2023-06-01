import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from './axiosClient';
const tagTypes = 'getQuizzDetailApi' as const;
export const getQuizzDetail = createApi({
  reducerPath: 'getQuizzDetail',
  tagTypes: [tagTypes],
  baseQuery: axiosBaseQuery(),
  endpoints: build => ({
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
export const {useGetQuizzMutation, useSubMitQuizMutation} = getQuizzDetail;
