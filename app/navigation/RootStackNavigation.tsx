/**
 * @description Navegación principal de la aplicación
 */

import React from 'react';
import ScreenLesson from '@app/screens/Lesson';
import ScreenCourse from '@app/screens/Course';
import HomeTabNavigation from './HomeTabNavigation';
import {NAVIGATION_SHARED_OPTIONS} from '@app/config/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStackNavigation = createNativeStackNavigator();

const RootStack = () => {
  return (
    <RootStackNavigation.Navigator
      initialRouteName="Home"
      screenOptions={NAVIGATION_SHARED_OPTIONS}>
      <RootStackNavigation.Screen name="Course" component={ScreenCourse} />
      <RootStackNavigation.Screen name="Lesson" component={ScreenLesson} />
      <RootStackNavigation.Screen name="Home" component={HomeTabNavigation} />
    </RootStackNavigation.Navigator>
  );
};

export default RootStack;
