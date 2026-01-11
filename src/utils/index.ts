/**
 * Crea una URL para una página específica.
 *
 * @param pageName - Nombre de la página
 * @returns URL formateada para la página
 */
export function createPageUrl(pageName: string): string {
  return `/${pageName.toLowerCase()}`;
}
