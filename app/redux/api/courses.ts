/**
 * @description API slice de /courses
 */

import {baseApi} from '@app/redux/api';
import {InterfaceCourses, InterfaceCourseDetailed} from '@app/ts/courses';
import type {InterfaceLesson, InterfaceLessonRequest} from '@app/ts/lessons';

export const coursesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllCourses: builder.query<InterfaceCourses, void>({
      query: () => ({
        url: '/v1/public/courses',
        method: 'get',
      }),
    }),
    getCourseById: builder.query<InterfaceCourseDetailed, string>({
      query: (id: string) => ({
        url: `/v1/public/courses/${id}`,
        method: 'get',
      }),
    }),
    getCourseLessonById: builder.query<InterfaceLesson, InterfaceLessonRequest>(
      {
        query: ({idCourse, idLesson}) => ({
          url: `/v1/public/courses/${idCourse}/lessons/${idLesson}`,
          method: 'get',
        }),
      },
    ),
  }),
});

export const {
  useGetAllCoursesQuery,
  useGetCourseByIdQuery,
  useGetCourseLessonByIdQuery,
} = coursesApi;
