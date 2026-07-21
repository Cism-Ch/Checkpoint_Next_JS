import { ColorSchemeScript } from '@mantine/core';

/**
 * @component ThemeColorScript
 * @description Composant responsable de l'initialisation du système de thème de l'application.
 * Ce script est injecté dans le head du document HTML via Next.js pour éviter le flash de
 * contenu incorrect (FOUC - Flash Of Unstyled Content) lors du chargement initial de la page.
 *
 * @integration
 * - S'intègre avec le système de thèmes de Mantine UI
 * - Doit être utilisé dans le fichier _document.tsx de Next.js
 * - Gère la persistance du thème via localStorage
 *
 * @props
 * - defaultColorScheme="auto" : Utilise les préférences système par défaut
 * - localStorageKey="mantine-color-scheme" : Clé utilisée pour persister le choix de l'utilisateur
 *
 * @example
 * ```tsx
 * // Dans pages/_document.tsx
 * import { ThemeColorScript } from '../components/common/ColorSchemeScript';
 *
 * export default function Document() {
 *   return (
 *     <Html>
 *       <Head>
 *         <ThemeColorScript />
 *       </Head>
 *       <body>
 *         <Main />
 *         <NextScript />
 *       </body>
 *     </Html>
 *   );
 * }
 * ```
 */
export function ThemeColorScript() {
  return (
    <ColorSchemeScript
      defaultColorScheme="auto"
      localStorageKey="mantine-color-scheme"
    />
  );
} 