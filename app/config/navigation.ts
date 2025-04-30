/**
 * @description Valores compartidos para la navegación
 */

import ScreenHome from '@app/screens/Home';
import ScreenSettings from '@app/screens/Settings';
import type {TypeHomeNavigationRoutes} from '@app/ts/navigation';

export const NAVIGATION_SHARED_OPTIONS = {headerShown: false};

export const HOME_BOTTOM_TAB_ROUTES: TypeHomeNavigationRoutes[] = [
  {
    iconName: 'home',
    label: 'TAB.HOME',
    name: 'ScreenHome',
    component: ScreenHome,
  },
  {
    iconName: 'settings',
    label: 'TAB.SETTINGS',
    name: 'ScreenSettings',
    component: ScreenSettings,
  },
];
