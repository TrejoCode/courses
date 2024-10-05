/**
 * @description Pantalla de ajustes
 */

import {
  Box,
  Text,
  Icon,
  Link,
  VStack,
  HStack,
  Switch,
  Heading,
  useColorMode,
} from 'native-base';
import {Platform} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getVersion} from 'react-native-device-info';
import FeatherIcons from 'react-native-vector-icons/Feather';

const ScreenSettings = (): JSX.Element => {
  const {t} = useTranslation(['settings']);
  const {setColorMode, colorMode} = useColorMode();

  /**
   * @description Cambiar el tema de la aplicación
   */
  const toggleDarkMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

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
      <VStack marginY="4" space="3">
        <Text
          color="secondary.base"
          _dark={{color: 'secondaryAlt.lighten'}}
          fontWeight="bold"
          fontSize="lg"
          marginY="2">
          {t('PREFERENCES.TITLE')}
        </Text>
        <HStack
          shadow={0}
          padding="3"
          rounded="md"
          alignItems="center"
          backgroundColor="white"
          justifyContent="space-between"
          _dark={{backgroundColor: 'dark.50'}}>
          <Text fontWeight="medium" numberOfLines={2}>
            {t('PREFERENCES.DARK_MODE')}
          </Text>
          <Switch
            size={Platform.OS === 'ios' ? 'sm' : 'md'}
            offTrackColor="gray"
            onToggle={toggleDarkMode}
            onTrackColor="primary.base"
            isChecked={colorMode === 'dark'}
          />
        </HStack>
        <Text
          color="secondary.base"
          _dark={{color: 'secondaryAlt.lighten'}}
          fontWeight="bold"
          fontSize="lg"
          marginY="2">
          {t('ABOUT.TITLE')}
        </Text>
        <HStack
          shadow={0}
          padding="3"
          rounded="md"
          alignItems="center"
          backgroundColor="white"
          justifyContent="space-between"
          _dark={{backgroundColor: 'dark.50'}}>
          <Link
            isExternal
            flexDirection="row"
            alignItems="center"
            href="https://www.trejocode.com">
            <Text paddingRight="1" numberOfLines={1} fontWeight="medium">
              {t('ABOUT.WEBSITE')}
            </Text>
            <Icon
              size="sm"
              marginLeft="2"
              as={FeatherIcons}
              name="external-link"
              color="primary.base"
              _dark={{color: 'primary.darken'}}
            />
          </Link>
        </HStack>
        <HStack
          shadow={0}
          padding="3"
          rounded="md"
          alignItems="center"
          backgroundColor="white"
          justifyContent="space-between"
          _dark={{backgroundColor: 'dark.50'}}>
          <Link
            isExternal
            flexDirection="row"
            alignItems="center"
            href="https://trejocode.com/licencias">
            <Text paddingRight="1" numberOfLines={1} fontWeight="medium">
              {t('ABOUT.LICENSES')}
            </Text>
            <Icon
              size="sm"
              marginLeft="2"
              as={FeatherIcons}
              name="external-link"
              color="primary.base"
              _dark={{color: 'primary.darken'}}
            />
          </Link>
        </HStack>
        <HStack
          shadow={0}
          padding="3"
          rounded="md"
          alignItems="center"
          backgroundColor="white"
          justifyContent="space-between"
          _dark={{backgroundColor: 'dark.50'}}>
          <Text fontWeight="medium" numberOfLines={2}>
            {t('ABOUT.VERSION')}: {getVersion()}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ScreenSettings;
