/**
 * @description Declaración de los tipos para la navegación
 */

import type {InterfaceLesson} from '@app/ts/lessons';
import type {RouteProp} from '@react-navigation/native';
import type {InterfaceInstructor} from './instructors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type TypeHomeBottomTabsParams = {
  ScreenHome: undefined;
  ScreenSettings: undefined;
};

export type TypeRootStackParams = {
  Home: undefined;
  Course: {
    id: string;
  };
  Lesson: {
    idCourse: string;
    idLesson: string;
    nextLessonIndex: number | undefined;
    lessons: InterfaceLesson[] | undefined;
    instructors: InterfaceInstructor[] | undefined;
  };
};

export type TypeLessonNavigationProp = NativeStackNavigationProp<
  TypeRootStackParams,
  'Lesson'
>;

// Tipos para useRoute()
export type TypeCourseRouteProps = RouteProp<TypeRootStackParams, 'Course'>;
export type TypeLessonRouteProps = RouteProp<TypeRootStackParams, 'Lesson'>;

// Tipos para useNavigate()
export type TypeRootStackNavigationProps =
  NativeStackNavigationProp<TypeRootStackParams>;
