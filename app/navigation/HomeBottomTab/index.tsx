/**
 * @description Navegación principal por bottom tabs
 */

import React from 'react';
import type {
  TypeHomeTabsProps,
  TypeHomeBottomTabsParams,
} from '@app/ts/navigation';
import {
  HOME_BOTTOM_TAB_ROUTES,
  NAVIGATION_SHARED_OPTIONS,
} from '@app/config/navigation';
import HomeBottomTab from './Tab';
import {Platform} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme, useColorMode} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeTabNavigator = createBottomTabNavigator<TypeHomeBottomTabsParams>();

export const renderTabBarIcon =
  ({iconName, title}: Omit<TypeHomeTabsProps, 'focused'>) =>
  ({focused}: {focused: boolean}) => (
    <HomeBottomTab focused={focused} iconName={iconName} title={title} />
  );

const HomeBottomTabNavigation = (): JSX.Element => {
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
      {HOME_BOTTOM_TAB_ROUTES?.map((tab, key) => (
        <HomeTabNavigator.Screen
          key={key}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: t(tab.label),
            tabBarIcon: renderTabBarIcon({
              title: t(tab.label),
              iconName: tab.iconName,
            }),
          }}
        />
      ))}
    </HomeTabNavigator.Navigator>
  );
};

export default HomeBottomTabNavigation;
