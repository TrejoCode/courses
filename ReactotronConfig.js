/**
 * @description Configuración de Reactotron
 */

import Reactotron, {
  networking,
  openInEditor,
  trackGlobalLogs,
} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

Reactotron.clear();

const reactotron = Reactotron.configure({
  name: 'Trejocode Courses',
})
  .useReactNative({
    networking: {
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/,
    },
  })
  .use(reactotronRedux())
  .use(networking())
  .use(openInEditor())
  .use(trackGlobalLogs())
  .connect();

export default reactotron;
