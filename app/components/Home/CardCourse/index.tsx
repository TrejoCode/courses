/**
 * @description Componente que muestra un card con detalles básicos de un curso. Incluye nombre del curso, cantidad de lecciones,
 * duración del contenido y reseñas verificadas.
 */

import React from 'react';
import CardCoursePresenter from './Presenter';
import type {InterfaceCourse} from '@app/ts/courses';
import {useNavigation} from '@react-navigation/native';
import {convertionHelpers} from '@app/helpers/convertions';
import {useGetCourseByIdQuery} from '@app/redux/api/courses';
import {getAnalytics} from '@react-native-firebase/analytics';
import type {TypeRootStackNavigationProps} from '@app/ts/navigation';

const CardCourseContainer = ({
  course,
}: {
  course: InterfaceCourse;
}): JSX.Element => {
  const analytics = getAnalytics();
  const navigation = useNavigation<TypeRootStackNavigationProps>();

  // Obtener los detalles del curso
  const {data, isLoading} = useGetCourseByIdQuery(course?.id);

  /**
   * @description Ir a la pantalla de detalles del curso y registrar el evento
   */
  const handlePressStart = async (
    currentCourse: InterfaceCourse,
  ): Promise<void> => {
    await analytics.logEvent('course_start', {
      id: currentCourse?.id,
      name: currentCourse?.name,
    });
    navigation.navigate('Course', {id: currentCourse.id});
  };

  return (
    <CardCoursePresenter
      course={course}
      isLoading={isLoading}
      reviews={data?.reviews || []}
      handlePressStart={handlePressStart}
      lessonsCount={data?.lessons?.length || 0}
      duration={convertionHelpers.secondsToHours(data?.summary?.duration ?? 0)}
    />
  );
};

export default CardCourseContainer;
