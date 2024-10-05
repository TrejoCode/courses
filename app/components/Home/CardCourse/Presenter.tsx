/**
 * @description Componente que muestra un card con detalles básicos de un curso. Incluye nombre del curso, cantidad de lecciones,
 * duración del contenido y reseñas verificadas.
 */

import React from 'react';
import {
  Box,
  Icon,
  Text,
  Avatar,
  Button,
  HStack,
  Heading,
  Skeleton,
} from 'native-base';
import {useTranslation} from 'react-i18next';
import FeatherIcons from 'react-native-vector-icons/Feather';
import type {TypeCardCoursePresenterProps} from '@app/ts/home';

const CardCoursePresenter = ({
  course,
  reviews,
  duration,
  isLoading,
  lessonsCount,
  handlePressStart,
}: TypeCardCoursePresenterProps): JSX.Element => {
  const {t} = useTranslation(['home']);

  return (
    <Box
      px="4"
      py="6"
      my="6"
      shadow={2}
      bg="white"
      rounded="md"
      _dark={{bg: 'dark.50'}}>
      <Heading
        color="secondary.base"
        _dark={{color: 'white'}}
        fontWeight="semibold"
        size="md">
        {course?.name}
      </Heading>
      <Skeleton height="5" isLoaded={!isLoading} mt={4}>
        <HStack alignItems="center" mt={4} space={4}>
          <HStack alignItems="center">
            <Icon
              as={FeatherIcons}
              name="book"
              color="secondaryAlt.base"
              _dark={{color: 'secondaryAlt.lighten'}}
              size="md"
              mr={1}
            />
            <Text fontWeight="medium" fontSize="md">
              {`${lessonsCount} ${t('CARD.LESSONS')}`}
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icon
              as={FeatherIcons}
              name="clock"
              color="secondaryAlt.base"
              _dark={{color: 'secondaryAlt.lighten'}}
              size="md"
              mr={1}
            />
            <Text fontWeight="medium" fontSize="md">
              {duration.toFixed(0)} {t('CARD.HOURS')}
            </Text>
          </HStack>
        </HStack>
      </Skeleton>
      <HStack mt={4} alignItems="center">
        {reviews?.map((review, index) => {
          if (index <= 4) {
            return (
              <Avatar
                size="xs"
                key={review?.id}
                source={{uri: review?.thumbnailUrl}}>
                {review?.name}
              </Avatar>
            );
          }
        })}
        {reviews?.length > 0 && (
          <Text ml={3} fontSize="md" fontWeight="medium">
            {t('CARD.REVIEWS')}
          </Text>
        )}
      </HStack>
      <HStack mt={4} justifyContent="space-between">
        <Button
          colorScheme="primary"
          flexGrow={1}
          variant="default"
          leftIcon={
            <Icon as={FeatherIcons} name="play" color="white" size="sm" />
          }
          onPress={() => handlePressStart(course)}>
          {t('CARD.BUTTON')}
        </Button>
      </HStack>
    </Box>
  );
};

export default CardCoursePresenter;
