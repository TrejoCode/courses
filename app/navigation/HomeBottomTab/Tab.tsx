/**
 * @description Bottom Tab Item
 */

import React from 'react';
import type {TypeHomeTabsProps} from '@app/ts/navigation';
import {navigationHelpers} from '@app/helpers/navigation';
import {Icon, useColorMode, Stack, Text} from 'native-base';
import FeatherIcons from 'react-native-vector-icons/Feather';

const HomeBottomTab = ({
  title,
  focused,
  iconName,
}: TypeHomeTabsProps): JSX.Element => {
  const {colorMode} = useColorMode();

  return (
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
        backgroundColor={navigationHelpers.getHomeTabsBackgroundColor({
          colorMode,
          isFocused: focused,
        })}>
        <Icon
          size="md"
          name={iconName}
          as={FeatherIcons}
          color={navigationHelpers.getHomeTabsIconColor({
            colorMode,
            isFocused: focused,
          })}
        />
      </Stack>
      <Text
        fontSize="sm"
        paddingBottom="1"
        fontWeight="semibold"
        color={navigationHelpers.getHomeTabsLabelColor({
          colorMode,
          isFocused: focused,
        })}>
        {title}
      </Text>
    </Stack>
  );
};

export default HomeBottomTab;
