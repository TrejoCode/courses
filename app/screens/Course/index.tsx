/**
 * @description Pantalla de detalle de un curso
 */

import type {
  TypeCourseRouteProps,
  TypeLessonNavigationProp,
} from '@app/ts/navigation';
import CoursePresenter from './Presenter';
import {useGetCourseByIdQuery} from '@app/redux/api/courses';
import {getAnalytics} from '@react-native-firebase/analytics';
import {useNavigation, useRoute} from '@react-navigation/native';

const ScreenCourse = (): JSX.Element => {
  const {params} = useRoute<TypeCourseRouteProps>();
  const {goBack, navigate} = useNavigation<TypeLessonNavigationProp>();

  // Obtener los detalles del curso
  const {data, isLoading, isError} = useGetCourseByIdQuery(params?.id);

  /**
   * @description Enviar a la pantalla de la lección del curso
   */
  const handlePressPlay = async (
    idCourse: string,
    idLesson: number,
    indexLesson: number,
    lessonName: string,
  ): Promise<void> => {
    const analytics = getAnalytics();
    await analytics.logEvent('course_play', {
      id: idLesson,
      name: lessonName,
      idCourse: params.id,
    });

    // Obtener el índice de la siguiente lección del curso
    const nextLessonIndex =
      data?.lessons.length === indexLesson + 1 ? undefined : indexLesson + 1;

    // Ir a la pantalla de la lección del curso
    navigate('Lesson', {
      idCourse,
      nextLessonIndex,
      idLesson: String(idLesson),
      lessons: data?.lessons ?? undefined,
      instructors: data?.instructors ?? undefined,
    });
  };

  return (
    <CoursePresenter
      data={data}
      goBack={goBack}
      isError={isError}
      isLoading={isLoading}
      handlePressPlay={handlePressPlay}
    />
  );
};

export default ScreenCourse;
