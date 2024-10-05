/**
 * @description Funcionalidades adicionales para conversiones de datos
 */

import type {InterfaceInstructor} from '@app/ts/instructors';

const secondsToMinutes = (seconds: number): number => seconds / 60;

const secondsToHours = (seconds: number): number => seconds / 3600;

const getFormattedInstructorsNames = (
  instructors: Array<InterfaceInstructor>,
): string =>
  instructors
    ?.map(
      instructor => `${instructor?.name ?? ''} (${instructor?.alias ?? ''})`,
    )
    .join(', ');

export const convertionHelpers = {
  secondsToHours,
  secondsToMinutes,
  getFormattedInstructorsNames,
};
