/**
 * @description Declaración de los tipos para las lecciones
 */

import type {InterfaceLesson} from './lessons';
import type {TypeLessonRouteProps} from '@app/ts/navigation';
import type {PLAYER_STATES} from 'react-native-youtube-iframe';

export interface InterfaceLesson {
  id: number;
  name: string;
  description: string;
  duration: number;
  order: number;
  idVideo: string;
  idSection: string;
  resources: InterfaceResource[];
  thumbnailUrl: string;
}

export interface InterfaceResource {
  title: string;
  url: string;
}

export interface InterfaceLessons {
  lessons: InterfaceLesson[];
  count: number;
}

export interface InterfaceLessonRequest {
  idCourse: string;
  idLesson: string;
}

export type TypeLessonPresenterProps = {
  isError: boolean;
  playing: boolean;
  isLoading: boolean;
  goBack: () => void;
  data: InterfaceLesson | undefined;
  params: TypeLessonRouteProps['params'];
  onStateChange: (state: PLAYER_STATES) => void;
  handlePressPlay: (idCourse: string, indexLesson: number) => void;
};
