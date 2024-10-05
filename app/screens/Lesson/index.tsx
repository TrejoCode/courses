/**
 * @description Pantalla de lección del curso
 */

import {useState, useCallback} from 'react';
import type {
  TypeLessonRouteProps,
  TypeLessonNavigationProp,
} from '@app/ts/navigation';
import LessonPresenter from './Presenter';
import {PLAYER_STATES} from 'react-native-youtube-iframe';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useGetCourseLessonByIdQuery} from '@app/redux/api/courses';

const ScreenLesson = (): JSX.Element => {
  const {params} = useRoute<TypeLessonRouteProps>();
  const [playing, setPlaying] = useState<boolean>(false);
  const {goBack, setParams} = useNavigation<TypeLessonNavigationProp>();

  // Obtener el detalle de la lección
  const {data, isError, isLoading} = useGetCourseLessonByIdQuery({
    idCourse: params?.idCourse,
    idLesson: params?.idLesson,
  });

  // Detener el reproductor al finalizar
  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  // Obtener la siguiente lección al presionar "Siguiente lección"
  const handlePressPlay = (idCourse: string, indexLesson: number): void => {
    const nextIdLesson = params.lessons ? params.lessons[indexLesson].id : 0;
    const nextLessonIndex =
      params?.lessons?.length === indexLesson + 1 ? undefined : indexLesson + 1;

    // Actualizar los params de la pantalla para activar el refetch de la lección
    setParams({idCourse, idLesson: String(nextIdLesson), nextLessonIndex});
  };

  return (
    <LessonPresenter
      data={data}
      goBack={goBack}
      params={params}
      playing={playing}
      isError={isError}
      isLoading={isLoading}
      onStateChange={onStateChange}
      handlePressPlay={handlePressPlay}
    />
  );
};

export default ScreenLesson;
