/**
 * @description Componente reutilizable para mostrar un progreso de carga con mensaje a pantalla completa
 * @param {string} message - Mensaje de carga detallado.
 */

import {ActivityIndicator} from 'react-native';
import {Text, VStack, useTheme} from 'native-base';
import type {TypeLoaderProps} from '@app/ts/loader';

const LoaderFullScreen = ({message = null}: TypeLoaderProps): JSX.Element => {
  const {colors} = useTheme();

  return (
    <VStack
      space="8"
      bg="white"
      width="full"
      height="full"
      _dark={{bg: 'dark.50'}}
      justifyContent="center">
      <ActivityIndicator size="large" color={colors.primary.base} />
      {message && (
        <Text
          marginY="2"
          fontSize="md"
          textAlign="center"
          fontWeight="medium"
          color="secondary.base"
          _dark={{color: 'secondaryAlt.lighten'}}>
          {String(message)}
        </Text>
      )}
    </VStack>
  );
};

export default LoaderFullScreen;
