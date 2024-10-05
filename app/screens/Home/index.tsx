/**
 * @description Pantalla principal (Container)
 */
import React from 'react';

import ScreenHomePresenter from './Presenter';
import {useGetAllCoursesQuery} from '@app/redux/api/courses';

const ScreenHome = (): JSX.Element => {
  const {data, isLoading, isError, refetch} = useGetAllCoursesQuery();

  return (
    <ScreenHomePresenter
      data={data}
      refetch={refetch}
      isError={isError}
      isLoading={isLoading}
    />
  );
};

export default ScreenHome;
