/**
 * @description Declaración de los tipos de la pantalla de home
 */

import type {InterfaceReview} from '@app/ts/reviews';
import type {InterfaceCourses, InterfaceCourse} from '@app/ts/courses';

export type TypeScreenHomePresenterProps = {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
  data: InterfaceCourses | undefined;
};

export type TypeCardCoursePresenterProps = {
  duration: number;
  isLoading: boolean;
  lessonsCount: number;
  course: InterfaceCourse;
  reviews: InterfaceReview[];
  handlePressStart: (course: InterfaceCourse) => void;
};
