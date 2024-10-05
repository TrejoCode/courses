/**
 * @description Declaración de los tipos para los instructores de un curso
 */

export interface InterfaceInstructor {
  id: number;
  name: string;
  alias: string;
  socialUrl: string;
  imageUrl: string | null;
}

export interface InterfaceInstructors {
  instructors: InterfaceInstructor[];
  count: number;
}
