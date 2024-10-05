/**
 * @description Componente reutilizable para mostrar un progreso de carga con mensaje
 */

import {Spinner, Text} from 'native-base';
import type {TypeLoaderProps} from '@app/ts/loader';

const Loader = ({message}: TypeLoaderProps): JSX.Element => {
  return (
    <>
      <Spinner color="primary.base" size="lg" />
      <Text
        marginY="2"
        fontSize="md"
        fontWeight="medium"
        color="secondary.base"
        _dark={{color: 'secondaryAlt.lighten'}}>
        {message}
      </Text>
    </>
  );
};

export default Loader;
