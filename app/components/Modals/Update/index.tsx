/**
 * @description Modal de nueva actualización de la aplicación
 */

import {useState, useEffect} from 'react';
import ModalUpdatePresenter from './Presenter';
import {getVersion} from 'react-native-device-info';
import {remoteConfigHelpers} from '@app/helpers/remote-config';

const ModalUpdate = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * @description Descarga la configuración remota y valida la actualización
   */
  const loadRemoteConfig = async () => {
    // Descarga la configuración remota
    await remoteConfigHelpers.initializeRemoteConfig();

    // Obtiene el estado de la descarga
    const fetchStatus = remoteConfigHelpers.getFetchStatus();

    // Si la descarga falla, oculta la alerta
    if (fetchStatus !== 'success') {
      setVisible(false);
      return false;
    }

    const enableAppCheck = remoteConfigHelpers
      .getRemoteValue(
        remoteConfigHelpers.REMOTE_CONFIG_DEFAULT_KEYS
          .COURSES_APP_ENABLE_UPDATES,
      )
      ?.asBoolean();

    // Si la verificación remota no está habilitada, oculta la alerta
    if (!enableAppCheck) {
      setVisible(false);
      return false;
    }

    // Verificar la versión de la aplicación remota vs local
    const latestAppVersion = remoteConfigHelpers
      .getRemoteValue(
        remoteConfigHelpers.REMOTE_CONFIG_DEFAULT_KEYS.COURSES_APP_VERSION,
      )
      ?.asString();

    if (latestAppVersion !== '' && latestAppVersion !== getVersion()) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    loadRemoteConfig();
  }, []);

  // Cerrar el modal
  const handleCancel = () => setVisible(false);

  return <ModalUpdatePresenter visible={visible} onCancel={handleCancel} />;
};

export default ModalUpdate;
