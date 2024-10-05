/**
 * @description Gestión principal de la navegación
 */

import React from 'react';
import {StatusBar, Box} from 'native-base';
import RootStackNavigator from './RootStackNavigation';
import ModalUpdate from '@app/components/Modals/Update';

const Navigation = (): JSX.Element => {
  return (
    <Box
      safeAreaTop
      flexGrow={1}
      backgroundColor="white"
      _dark={{
        backgroundColor: 'dark.50',
      }}>
      <StatusBar />
      <RootStackNavigator />
      <ModalUpdate />
    </Box>
  );
};
export default Navigation;
