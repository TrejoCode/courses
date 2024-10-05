/**
 * @description Declaración de los tipos para las reseñas de un curso
 */

export interface InterfaceReview {
  id: number;
  name: string;
  description: string;
  thumbnailUrl: string;
}

export interface InterfaceReviews {
  reviews: InterfaceReview[];
  count: number;
}
