/**
 * @description Componente reutilizable para mostrar mensajes de error con un ícono, título, mensaje un botón.
 * @param {string} title - Título del mensaje de error.
 * @param {string} message - Mensaje de error detallado.
 * @param {boolean} [loading=false] - Indica si el botón está en estado de carga.
 * @param {string} [buttonText='Lo comprendo'] - Texto del botón (opcional).
 * @param {function} onPress - Función que se ejecuta cuando se presiona el botón.
 */

import type {TypeErrorProps} from '@app/ts/error';
import {VStack, Icon, Text, Button} from 'native-base';
import FeatherIcons from 'react-native-vector-icons/Feather';

const Error = ({
  title,
  onPress,
  message,
  buttonText,
  loading = false,
}: TypeErrorProps): JSX.Element => {
  return (
    <VStack
      space="4"
      paddingX="4"
      alignItems="center"
      justifyContent="center"
      _dark={{backgroundColor: 'black'}}>
      <Icon
        size="4xl"
        as={FeatherIcons}
        name="alert-triangle"
        color="secondary.base"
        _dark={{color: 'secondaryAlt.lighten'}}
      />
      <Text
        fontSize="lg"
        fontWeight="bold"
        textAlign="center"
        color="secondary.base"
        _dark={{color: 'secondaryAlt.lighten'}}>
        {title}
      </Text>
      <Text
        textAlign="center"
        fontWeight="medium"
        color="secondary.base"
        _dark={{color: 'secondaryAlt.lighten'}}>
        {message}
      </Text>
      <Button
        variant="default"
        onPress={onPress}
        isLoading={loading}
        isDisabled={loading}
        colorScheme="primary">
        {buttonText ?? 'Lo comprendo'}
      </Button>
    </VStack>
  );
};

export default Error;
