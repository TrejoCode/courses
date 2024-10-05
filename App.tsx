/**
 * @description Punto de entrada de la RN
 */

import '@app/locales/i18n';
import Providers from '@app/Providers';
import Navigation from '@app/navigation';
import Config from 'react-native-config';
import {init as SentryInit, wrap as SentryWrap} from '@sentry/react-native';

// Inicializar Sentry
SentryInit({
  dsn: Config.APP_SENTRY_DSN?.toString(),
  environment: Config.APP_ENVIRONMENT?.toString() ?? 'development',
});

const App = (): JSX.Element => {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
};

export default SentryWrap(App);
