/**
 * @description Declaración de los tipos para los cursos
 */

import type {InterfaceReview} from './reviews';
import type {InterfaceLesson} from './lessons';
import type {InterfaceSection} from './sections';
import type {InterfaceInstructor} from './instructors';

export interface InterfaceCourse {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  sections?: any;
  duration: number;
}

export interface InterfaceCourseDetailed {
  summary: InterfaceCourse;
  sections: InterfaceSection[];
  lessons: InterfaceLesson[];
  reviews: InterfaceReview[];
  instructors: InterfaceInstructor[];
}

export interface InterfaceCourses {
  courses: InterfaceCourse[];
  count: number;
}

export type TypeScreenCoursePresenterProps = {
  isError: boolean;
  isLoading: boolean;
  goBack: () => void;
  handlePressPlay: (
    idCourse: string,
    idLesson: number,
    indexLesson: number,
    lessonName: string,
  ) => Promise<void>;
  data: InterfaceCourseDetailed | undefined;
};
