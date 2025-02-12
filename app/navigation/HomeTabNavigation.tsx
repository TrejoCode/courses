/**
 * @description Navegación principal por tabs
 */

import React from 'react';
import {Platform} from 'react-native';
import ScreenHome from '@app/screens/Home';
import {useTranslation} from 'react-i18next';
import ScreenSettings from '@app/screens/Settings';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {NAVIGATION_SHARED_OPTIONS} from '@app/config/navigation';
import type {TypeHomeBottomTabsParams} from '@app/ts/navigation';
import {Icon, useTheme, useColorMode, Stack, Text} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeTabNavigator = createBottomTabNavigator<TypeHomeBottomTabsParams>();

const HomeTabNavigation = () => {
  const {colors} = useTheme();
  const {colorMode} = useColorMode();
  const {t} = useTranslation(['navigation']);

  const tabBackgroundColor =
    colorMode === 'dark' ? colors.dark[50] : colors.white;
  const tabBarInactiveTintColor =
    colorMode === 'dark' ? colors.secondaryAlt.lighten : colors.secondary.base;

  return (
    <HomeTabNavigator.Navigator
      initialRouteName="ScreenHome"
      screenOptions={{
        ...NAVIGATION_SHARED_OPTIONS,
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: 0,
          height: Platform.OS === 'ios' ? 92 : 64,
          elevation: 0,
          paddingTop: 0,
          position: 'absolute',
          borderTopColor: tabBackgroundColor,
          backgroundColor: tabBackgroundColor,
        },
        tabBarActiveTintColor: colors.primary.darken,
        tabBarInactiveTintColor: tabBarInactiveTintColor,
      }}
      backBehavior="initialRoute">
      <HomeTabNavigator.Screen
        name="ScreenHome"
        component={ScreenHome}
        options={{
          tabBarLabel: t('TAB.HOME'),
          tabBarIcon: ({focused}) => (
            <Stack
              width="full"
              paddingTop="1"
              alignItems="center"
              justifyContent="center">
              <Stack
                width="12"
                height="7"
                rounded="full"
                alignItems="center"
                justifyContent="center"
                backgroundColor={
                  focused
                    ? colors.primary.darken
                    : colorMode === 'dark'
                      ? colors.dark[50]
                      : colors.white
                }>
                <Icon
                  size="md"
                  name="home"
                  as={FeatherIcons}
                  color={
                    focused
                      ? colors.white
                      : colorMode === 'dark'
                        ? colors.secondaryAlt.lighten
                        : colors.secondary.base
                  }
                />
              </Stack>
              <Text
                fontSize="sm"
                paddingBottom="1"
                fontWeight="semibold"
                color={
                  focused
                    ? colors.primary.darken
                    : colorMode === 'dark'
                      ? colors.secondaryAlt.lighten
                      : colors.secondary.base
                }>
                {t('TAB.HOME')}
              </Text>
            </Stack>
          ),
        }}
      />
      <HomeTabNavigator.Screen
        name="ScreenSettings"
        component={ScreenSettings}
        options={{
          tabBarLabel: t('TAB.SETTINGS'),
          tabBarIcon: ({focused}) => (
            <Stack
              width="full"
              paddingTop="1"
              alignItems="center"
              justifyContent="center">
              <Stack
                width="12"
                height="7"
                rounded="full"
                alignItems="center"
                justifyContent="center"
                backgroundColor={
                  focused
                    ? colors.primary.darken
                    : colorMode === 'dark'
                      ? colors.dark[50]
                      : colors.white
                }>
                <Icon
                  size="md"
                  name="settings"
                  as={FeatherIcons}
                  color={
                    focused
                      ? colors.white
                      : colorMode === 'dark'
                        ? colors.secondaryAlt.lighten
                        : colors.secondary.base
                  }
                />
              </Stack>
              <Text
                fontSize="sm"
                paddingBottom="1"
                fontWeight="semibold"
                color={
                  focused
                    ? colors.primary.darken
                    : colorMode === 'dark'
                      ? colors.secondaryAlt.lighten
                      : colors.secondary.base
                }>
                {t('TAB.SETTINGS')}
              </Text>
            </Stack>
          ),
        }}
      />
    </HomeTabNavigator.Navigator>
  );
};

export default HomeTabNavigation;
