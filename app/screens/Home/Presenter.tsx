/**
 * @description Componente de presentación de la pantalla principal
 */

import React from 'react';
import Error from '@app/components/Error';
import Loader from '@app/components/Loaders';
import {useTranslation} from 'react-i18next';
import {Box, Heading, Text} from 'native-base';
import CardCourse from '@app/components/Home/CardCourse';
import type {TypeScreenHomePresenterProps} from '@app/ts/home';

const ScreenHomePresenter = ({
  data,
  refetch,
  isError,
  isLoading,
}: TypeScreenHomePresenterProps): JSX.Element => {
  const {t} = useTranslation(['home']);

  return (
    <Box
      px="4"
      py="6"
      flexGrow="1"
      bg="background"
      _dark={{backgroundColor: 'black'}}>
      <Heading size="2xl" color="secondary.base" _dark={{color: 'white'}}>
        {t('HEADING.TITLE')}
      </Heading>
      <Text fontSize="md" fontWeight="medium">
        {t('HEADING.SUBTITLE')}
      </Text>

      {/** Componente de carga */}
      {isLoading && (
        <Box flex={1} alignItems="center" justifyContent="center">
          <Loader message={t('LOADING.MESSAGE')} />
        </Box>
      )}

      {/** Componente de error */}
      {isError && (
        <Box flex={1} alignItems="center" justifyContent="center">
          <Error
            loading={isLoading}
            title={t('ERROR.TITLE')}
            onPress={() => refetch()}
            message={t('ERROR.MESSAGE')}
            buttonText={t('ERROR.BUTTON')}
          />
        </Box>
      )}

      {/** Componente de tarjetas del curso */}
      {data?.courses?.map(course => (
        <CardCourse key={course.id} course={course} />
      ))}
    </Box>
  );
};

export default ScreenHomePresenter;
