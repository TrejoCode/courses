/**
 * @description Componente de presentación de la pantalla de lección del curso
 */

import {
  Box,
  Text,
  Icon,
  Link,
  Avatar,
  HStack,
  VStack,
  Spinner,
  Pressable,
  ScrollView,
} from 'native-base';
import Error from '@app/components/Error';
import {useTranslation} from 'react-i18next';
import {Dimensions, Platform} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {convertionHelpers} from '@app/helpers/convertions';
import FeatherIcons from 'react-native-vector-icons/Feather';
import type {TypeLessonPresenterProps} from '@app/ts/lessons';

const LessonPresenter = ({
  data,
  goBack,
  params,
  playing,
  isError,
  isLoading,
  onStateChange,
  handlePressPlay,
}: TypeLessonPresenterProps): JSX.Element => {
  const {t} = useTranslation(['lesson']);

  return (
    <>
      {/** Componente de carga */}
      {isLoading && (
        <Box
          height="full"
          alignItems="center"
          justifyContent="center"
          _dark={{backgroundColor: 'black'}}>
          <Spinner color="primary.base" size="lg" />
          <Text
            marginY="2"
            fontSize="md"
            fontWeight="medium"
            color="secondary.base"
            _dark={{color: 'secondaryAlt.lighten'}}>
            {t('LOADING.MESSAGE')}
          </Text>
        </Box>
      )}

      {/** Componente de error */}
      {isError && (
        <Box
          height="100%"
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

      {/** Detalles de la lección */}
      {data && (
        <Box
          safeAreaBottom
          _dark={{
            backgroundColor: 'dark.50',
          }}>
          <HStack
            space="2"
            width="full"
            paddingX="2"
            paddingY="4"
            alignItems="center"
            backgroundColor="white"
            _dark={{backgroundColor: 'black'}}>
            <Icon
              size="2xl"
              as={FeatherIcons}
              name="chevron-left"
              _dark={{color: 'white'}}
              color="secondaryAlt.base"
              onPress={() => goBack()}
            />
            <Text
              fontSize="lg"
              paddingRight="8"
              numberOfLines={1}
              fontWeight="bold"
              color="primary.base"
              _dark={{color: 'white'}}>
              {data?.name}
            </Text>
          </HStack>

          {/** Reproductor de video */}
          <Box width="full" height={(Dimensions.get('window').width * 9) / 16}>
            <YoutubePlayer
              play={playing}
              height={(Dimensions.get('window').width * 9) / 16}
              videoId={data?.idVideo || 'ICEaygTPz8U'}
              onChangeState={onStateChange}
              webViewStyle={{opacity: 0.99}}
              webViewProps={{
                renderToHardwareTextureAndroid: true,
                androidLayerType:
                  Platform.OS === 'android' && Platform.Version <= 22
                    ? 'hardware'
                    : 'none',
              }}
            />
          </Box>

          {/** Detalles de la lección */}
          <ScrollView
            padding="4"
            minHeight="70%"
            maxHeight="85%"
            backgroundColor="white"
            contentContainerStyle={{paddingBottom: 180}}
            _dark={{backgroundColor: 'black'}}>
            <VStack space="2">
              <Text
                color="secondary.base"
                _dark={{color: 'light.200'}}
                fontWeight="bold"
                fontSize="md">
                {data.name}
              </Text>
              <Text
                color="secondaryAlt.base"
                _dark={{color: 'secondaryAlt.lighten'}}
                fontWeight="medium">
                {data.description}
              </Text>
            </VStack>
            <HStack alignItems="center" space="2" marginTop="2">
              <Icon
                size="sm"
                name="clock"
                as={FeatherIcons}
                color="secondary.base"
                _dark={{color: 'secondaryAlt.lighten'}}
              />
              <Text fontWeight="medium" numberOfLines={2}>
                {convertionHelpers.secondsToMinutes(data.duration).toFixed(2)}{' '}
                {t('SUMMARY.MINUTES')}
              </Text>
            </HStack>

            {/** Recursos */}
            <Text
              color="secondary.base"
              fontWeight="bold"
              fontSize="md"
              marginY="4"
              _dark={{color: 'secondaryAlt.lighten'}}>
              {t('RESOURCES.TITLE')}
            </Text>
            {data?.resources?.map((resource, index) => (
              <VStack space="2" marginBottom="2" key={index}>
                <Link
                  isExternal
                  flexDirection="row"
                  alignItems="center"
                  href={
                    resource?.url ?? 'https://www.linkedin.com/in/trejocode/'
                  }>
                  <Text
                    paddingRight="1"
                    numberOfLines={1}
                    fontWeight="semibold">
                    {resource?.title}
                  </Text>
                  <Icon
                    size="sm"
                    marginLeft="1"
                    as={FeatherIcons}
                    name="external-link"
                    color="primary.base"
                    _dark={{color: 'primary.darken'}}
                  />
                </Link>
              </VStack>
            ))}

            {(data?.resources === null || data?.resources?.length === 0) && (
              <Text paddingRight="1" numberOfLines={1} fontWeight="semibold">
                {t('RESOURCES.EMPTY')}
              </Text>
            )}

            {/** Siguiente lección */}
            {params?.lessons && params?.nextLessonIndex && (
              <>
                <Text
                  color="secondary.base"
                  fontWeight="bold"
                  fontSize="md"
                  marginY="4"
                  _dark={{color: 'secondaryAlt.lighten'}}>
                  {t('NEXT.TITLE')}
                </Text>
                <HStack alignItems="center" space="2">
                  <Text
                    flex={1}
                    fontSize="md"
                    paddingRight="1"
                    numberOfLines={1}
                    fontWeight="semibold">
                    {params.lessons[params?.nextLessonIndex]?.name}
                  </Text>
                  <Pressable
                    width="10"
                    onPress={() =>
                      handlePressPlay(
                        params?.idCourse,
                        params?.nextLessonIndex ?? 0,
                      )
                    }>
                    <Icon
                      size="3xl"
                      as={FeatherIcons}
                      name="play-circle"
                      color="primary.base"
                      _dark={{color: 'primary.darken'}}
                    />
                  </Pressable>
                </HStack>
              </>
            )}

            {/** Mentor */}
            <Text
              color="secondary.base"
              fontWeight="bold"
              fontSize="md"
              marginY="4"
              _dark={{color: 'secondaryAlt.lighten'}}>
              {t('INSTRUCTOR.TITLE')}
            </Text>
            {params?.instructors?.map((instructor, key) => (
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
          </ScrollView>
        </Box>
      )}
    </>
  );
};

export default LessonPresenter;
