/**
 * @description Pila de proveedores de la aplicación
 */

import {theme} from '@app/config/native-base';
import {errorHelpers} from './helpers/errors';
import {NativeBaseProvider} from 'native-base';
import {store, persistor} from '@app/redux/store';
import ErrorGlobal from './components/Error/Global';
import {Provider as ReduxProvider} from 'react-redux';
import {nativeBaseHelpers} from './helpers/native-base';
import RNErrorBoundary from 'react-native-error-boundary';
import {ReactNode, useRef, MutableRefObject} from 'react';
import {navigationHelpers} from '@app/helpers/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import LoaderFullScreen from '@app/components/Loaders/FullScreen';

const Providers = ({children}: {children: ReactNode}): JSX.Element => {
  const navigationRef: any = useRef();
  const routeNameRef: MutableRefObject<undefined> = useRef();

  return (
    <ReduxProvider store={store}>
      <NativeBaseProvider
        theme={theme}
        colorModeManager={nativeBaseHelpers.colorModeManager}>
        <RNErrorBoundary
          FallbackComponent={ErrorGlobal}
          onError={error =>
            errorHelpers.reportError({
              error,
              errorName: error?.name ?? 'JS Exception',
              customAttributes: {
                stack: error?.stack ?? 'No stack trace available',
              },
            })
          }>
          <PersistGate
            persistor={persistor}
            loading={<LoaderFullScreen message="" />}>
            <NavigationContainer
              ref={navigationRef}
              fallback={<LoaderFullScreen message="" />}
              onReady={() =>
                navigationHelpers.handleNavigationReady(
                  routeNameRef,
                  navigationRef,
                )
              }
              onStateChange={async () => {
                const currentRouteName: any =
                  navigationRef.current.getCurrentRoute().name;
                const previousRouteName: any = routeNameRef.current;
                navigationHelpers.handleNavigationStateChange(
                  currentRouteName,
                  previousRouteName,
                );
                routeNameRef.current = currentRouteName;
              }}>
              {children}
            </NavigationContainer>
          </PersistGate>
        </RNErrorBoundary>
      </NativeBaseProvider>
    </ReduxProvider>
  );
};

export default Providers;
