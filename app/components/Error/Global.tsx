/**
 * @description Componente global para mostrar mensajes de error con un ícono, título, mensaje un botón.
 */

import {useTranslation} from 'react-i18next';
import {VStack, Icon, Text} from 'native-base';
import FeatherIcons from 'react-native-vector-icons/Feather';

const ErrorGlobal = (): JSX.Element => {
  const {t} = useTranslation(['common']);
  return (
    <VStack
      space="4"
      paddingX="4"
      height="full"
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
        {t('ERRORS_GLOBAL.TITLE')}
      </Text>
      <Text
        textAlign="center"
        fontWeight="medium"
        color="secondary.base"
        _dark={{color: 'secondaryAlt.lighten'}}>
        {t('ERRORS_GLOBAL.DESCRIPTION')}
      </Text>
    </VStack>
  );
};

export default ErrorGlobal;
