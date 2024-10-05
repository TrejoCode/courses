/**
 * @description Native base tema personalizado
 */

import {extendTheme} from 'native-base';
import {Dict} from 'native-base/lib/typescript/theme/tools';

export const theme = extendTheme({
  colors: {
    primary: {
      base: '#3E816D',
      darken: '#316757',
      lighten: '#649A8A',
    },
    primaryAlt: {
      base: '#288091',
      darken: '#206674',
      lighten: '#5299A7',
    },
    secondary: {
      base: '#263D54',
      darken: '#1E3043',
      lighten: '#516376',
    },
    secondaryAlt: {
      base: '#516376',
      darken: '#404F5E',
      lighten: '#738291',
    },
    success: {
      base: '#008537',
      darken: '#006A2C',
      lighten: '#329D5E',
    },
    warning: {
      base: '#706700',
      darken: '#595200',
      lighten: '#8C8532',
    },
    danger: {
      base: '#C0392B',
      darken: '#992D22',
      lighten: '#CC6055',
    },
    info: {
      base: '#207B8D',
      darken: '#196270',
      lighten: '#4C95A3',
    },
    gray: '#6c6c6c',
    'dark-gray': '#4b4b4b',
    background: '#EBF3F5',
  },
  components: {
    Button: {
      variants: {
        default: ({colorScheme}: Dict) => {
          return {
            rounded: '12',
            _text: {
              color: 'white',
              fontWeight: 'semibold',
            },
            _icon: {
              color: 'white',
            },
            _loading: {
              opacity: '70',
            },
            _spinner: {
              color: 'white',
            },
            bg: `${colorScheme}.base`,
            _hover: {
              bg: `${colorScheme}.lighten`,
            },
            _pressed: {
              bg: `${colorScheme}.darken`,
            },

            _dark: {
              bg: `${colorScheme}.base`,
              _hover: {
                bg: `${colorScheme}.lighten`,
              },
              _pressed: {
                bg: `${colorScheme}.darken`,
              },
            },
          };
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'secondaryAlt.base',
        _dark: {
          color: 'secondaryAlt.lighten',
        },
      },
    },
  },
  fontConfig: {
    IBMPlexSans: {
      400: {
        normal: 'IBMPlexSans-Regular',
      },
      500: {
        normal: 'IBMPlexSans-Medium',
      },
      600: {
        normal: 'IBMPlexSans-SemiBold',
      },
      700: {
        normal: 'IBMPlexSans-Bold',
      },
    },
  },
  fonts: {
    heading: 'IBMPlexSans',
    body: 'IBMPlexSans',
    mono: 'IBMPlexSans',
  },
  config: {
    useSystemColorMode: false,
  },
});

// Get the type of the custom theme
type TypeTheme = typeof theme;

// 3. Extend the internal NativeBase theme
declare module 'native-base' {
  interface ICustomTheme extends TypeTheme {}
}
