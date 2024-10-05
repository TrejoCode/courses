import React from 'react';
import {
  Box,
  Text,
  Icon,
  Image,
  VStack,
  HStack,
  Avatar,
  Link,
  Pressable,
  ScrollView,
} from 'native-base';
import Error from '@app/components/Error';
import {useTranslation} from 'react-i18next';
import Loader from '@app/components/Loaders';
import {convertionHelpers} from '@app/helpers/convertions';
import FeatherIcons from 'react-native-vector-icons/Feather';
import type {TypeScreenCoursePresenterProps} from '@app/ts/courses';

const CoursePresenter = ({
  data,
  goBack,
  isError,
  isLoading,
  handlePressPlay,
}: TypeScreenCoursePresenterProps) => {
  const {t} = useTranslation(['course']);

  return (
    <>
      {/** Componente de carga */}
      {isLoading && (
        <Box
          height="full"
          alignItems="center"
          justifyContent="center"
          _dark={{backgroundColor: 'black'}}>
          <Loader message={t('LOADING.MESSAGE')} />
        </Box>
      )}

      {/** Componente de error */}
      {isError && (
        <Box
          height="full"
          alignItems="center"
          justifyContent="center"
          _dark={{backgroundColor: 'black'}}>
          <Error
            onPress={() => goBack()}
            title={t('ERROR.TITLE')}
            message={t('ERROR.MESSAGE')}
          />
        </Box>
      )}

      {/** Detalles del curso */}
      {data && (
        <ScrollView>
          <Box
            safeAreaBottom
            _dark={{
              backgroundColor: 'dark.50',
            }}>
            {/** Header */}
            <Box position="relative">
              <Image
                height="40"
                width="full"
                resizeMode="cover"
                alt="Course cover"
                source={{uri: data?.summary?.thumbnailUrl}}
              />
              <Icon
                mr={1}
                top="4"
                left="2"
                size="4xl"
                as={FeatherIcons}
                position="absolute"
                name="chevron-left"
                color="secondaryAlt.base"
                onPress={() => goBack()}
              />
            </Box>

            {/** Tarjeta de resumen */}
            <VStack
              space="2"
              padding="4"
              backgroundColor="white"
              _dark={{backgroundColor: 'black'}}>
              <Text color="primary.base" fontWeight="bold" fontSize="xl">
                {data.summary.name}
              </Text>
              <Text fontWeight="medium" numberOfLines={2}>
                {data?.summary?.description}
              </Text>

              <HStack alignItems="center" space="6" marginTop="2">
                <HStack alignItems="center" space="2">
                  <Icon
                    size="sm"
                    as={FeatherIcons}
                    name="play-circle"
                    color="secondary.base"
                    _dark={{color: 'secondaryAlt.lighten'}}
                  />
                  <Text fontWeight="medium" numberOfLines={2}>
                    {data?.lessons?.length} {t('SUMMARY.LESSONS')}
                  </Text>
                </HStack>
                <HStack alignItems="center" space="2">
                  <Icon
                    size="sm"
                    as={FeatherIcons}
                    name="clock"
                    color="secondary.base"
                    _dark={{color: 'secondaryAlt.lighten'}}
                  />
                  <Text fontWeight="medium" numberOfLines={2}>
                    {convertionHelpers
                      .secondsToHours(data?.summary?.duration)
                      .toFixed(0)}
                    {t('SUMMARY.HOURS')}
                  </Text>
                </HStack>
              </HStack>

              {/** Características */}
              <Text
                color="secondary.base"
                _dark={{color: 'secondaryAlt.lighten'}}
                fontWeight="bold"
                fontSize="lg"
                marginY="2">
                {t('PERKS.TITLE')}
              </Text>
              <VStack space="2" marginBottom="2">
                <HStack alignItems="center" space="2">
                  <Icon
                    size="sm"
                    as={FeatherIcons}
                    name="award"
                    color="secondary.base"
                    _dark={{color: 'secondaryAlt.lighten'}}
                  />
                  <Text fontWeight="medium" numberOfLines={2}>
                    {t('PERKS.ACCESS')}
                  </Text>
                </HStack>
                <HStack alignItems="center" space="2">
                  <Icon
                    size="sm"
                    as={FeatherIcons}
                    name="bar-chart"
                    color="secondary.base"
                    _dark={{color: 'secondaryAlt.lighten'}}
                  />
                  <Text fontWeight="medium" numberOfLines={2}>
                    {data?.sections?.length} {t('PERKS.LEVELS')}
                  </Text>
                </HStack>
                <HStack alignItems="center" space="2">
                  <Icon
                    size="sm"
                    as={FeatherIcons}
                    name="file-text"
                    color="secondary.base"
                    _dark={{color: 'secondaryAlt.lighten'}}
                  />
                  <Text fontWeight="medium" numberOfLines={2}>
                    {t('PERKS.RESOURCES')}
                  </Text>
                </HStack>
                <HStack alignItems="center" space="2">
                  <Icon
                    size="sm"
                    as={FeatherIcons}
                    name="user-check"
                    color="secondary.base"
                    _dark={{color: 'secondaryAlt.lighten'}}
                  />
                  <Text fontWeight="medium" numberOfLines={2}>
                    {t('PERKS.TAUGHT')}
                    {`: `}
                    {convertionHelpers.getFormattedInstructorsNames(
                      data?.instructors ?? [],
                    )}
                  </Text>
                </HStack>
              </VStack>

              {/** Lecciones */}
              <Text
                marginY="2"
                fontSize="lg"
                fontWeight="bold"
                color="secondary.base"
                _dark={{color: 'secondaryAlt.lighten'}}>
                {t('LESSONS.TITLE')}
              </Text>
              <VStack space="8" marginBottom="2">
                {data?.lessons?.map((lesson, key) => (
                  <HStack key={lesson?.id} alignItems="center" space="2">
                    <Box width="9">
                      <Text
                        fontSize="2xl"
                        numberOfLines={1}
                        fontWeight="semibold"
                        color="secondary.base"
                        _dark={{color: 'light.300'}}>
                        {key + 1 >= 10 ? key + 1 : `0${key + 1}`}
                      </Text>
                    </Box>
                    <Text
                      flex={1}
                      fontSize="md"
                      paddingRight="1"
                      numberOfLines={1}
                      fontWeight="semibold">
                      {lesson?.name}
                    </Text>
                    <Pressable
                      onPress={() =>
                        handlePressPlay(
                          data?.summary.id,
                          lesson.id,
                          key,
                          lesson.name,
                        )
                      }
                      width="10">
                      <Icon
                        size="3xl"
                        as={FeatherIcons}
                        name="play-circle"
                        color="primary.base"
                        _dark={{color: 'primary.darken'}}
                      />
                    </Pressable>
                  </HStack>
                ))}
              </VStack>

              {/** Mentor */}
              <Text
                marginY="2"
                fontSize="lg"
                fontWeight="bold"
                color="secondary.base"
                _dark={{color: 'secondaryAlt.lighten'}}>
                {t('INSTRUCTOR.TITLE')}
              </Text>
              {data?.instructors?.map((instructor, key) => (
                <VStack key={instructor?.id ?? key}>
                  <HStack space="4" alignItems="center">
                    <Avatar
                      size="sm"
                      source={{
                        uri:
                          instructor?.imageUrl ??
                          'https://placehold.co/64/jpg?text=.',
                      }}
                    />
                    <Link
                      isExternal
                      flexDirection="row"
                      alignItems="center"
                      href={instructor?.socialUrl ?? ''}>
                      <Text
                        fontSize="md"
                        paddingRight="1"
                        numberOfLines={1}
                        fontWeight="semibold">
                        {instructor?.name ?? ''}
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
                </VStack>
              ))}
            </VStack>
          </Box>
        </ScrollView>
      )}
    </>
  );
};

export default CoursePresenter;
