/**
 * @description Declaración de los tipos de las secciones de un curso
 */

export interface InterfaceSection {
  id: number;
  name: string;
  order: number;
}

export interface InterfaceSections {
  sections: InterfaceSection[];
  count: number;
}
