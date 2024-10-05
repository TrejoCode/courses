/**
 * @description Modal de nueva actualización de la aplicación
 */

import React from 'react';
import {Modal} from 'react-native';
import {useTranslation} from 'react-i18next';
import {VStack, Text, Button, Icon} from 'native-base';
import FeatherIcons from 'react-native-vector-icons/Feather';
import type {TypeModalUpdatePresenterProps} from '@app/ts/modal';

const ModalUpdatePresenter = ({
  visible,
  onCancel,
}: TypeModalUpdatePresenterProps): JSX.Element => {
  const {t} = useTranslation(['common']);

  return (
    <Modal visible={visible} transparent={false} animationType="slide">
      <VStack
        flex={1}
        space="6"
        bg="white"
        paddingX="4"
        alignItems="center"
        justifyContent="center"
        _dark={{bg: 'dark.50'}}>
        <Icon
          as={FeatherIcons}
          name="alert-circle"
          color="secondaryAlt.base"
          _dark={{color: 'secondaryAlt.lighten'}}
          size="4xl"
          mr={1}
        />
        <Text
          fontSize="xl"
          textAlign="center"
          fontWeight="semibold"
          color="secondary.base"
          _dark={{color: 'white'}}>
          {t('UPDATE.TITLE')}
        </Text>
        <Text
          fontSize="md"
          textAlign="center"
          fontWeight="medium"
          color="secondary.base"
          _dark={{color: 'white'}}>
          {t('UPDATE.DESCRIPTION')}
        </Text>
        <Button
          width="50%"
          variant="default"
          colorScheme="primary"
          leftIcon={
            <Icon
              as={FeatherIcons}
              name="download-cloud"
              color="white"
              size="sm"
            />
          }>
          {t('UPDATE.BUTTON_ACCEPT')}
        </Button>
        <Button
          width="50%"
          variant="ghost"
          colorScheme="primary"
          onPress={onCancel}>
          {t('UPDATE.BUTTON_CANCEL')}
        </Button>
      </VStack>
    </Modal>
  );
};

export default ModalUpdatePresenter;
