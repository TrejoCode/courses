/**
 * @description Punto de entrada de la aplicación
 */

import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// Debbuger de Reactotron solo en compilaciones de desarrollo
if (__DEV__) {
  require('./ReactotronConfig');
}

AppRegistry.registerComponent(appName, () => App);
