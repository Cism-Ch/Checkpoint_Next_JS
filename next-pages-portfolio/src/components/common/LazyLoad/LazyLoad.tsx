import { ReactNode, Suspense } from 'react';
import { Box, Center, Loader } from '@mantine/core';

/**
 * @component LazyLoad
 * @description Composant de chargement différé qui affiche un indicateur de chargement
 * pendant que le contenu est en cours de chargement. Utilise React.Suspense pour gérer
 * le chargement asynchrone des composants.
 *
 * @props
 * @param {ReactNode} children - Le contenu à charger de manière différée
 * @param {number | string} [height=200] - Hauteur du conteneur de chargement
 * @param {number | string} [minHeight] - Hauteur minimale du conteneur
 *
 * @features
 * - Intégration avec React.Suspense pour le chargement asynchrone
 * - Affichage d'un loader Mantine personnalisable
 * - Gestion flexible des dimensions du conteneur
 * - Support du chargement de composants dynamiques
 *
 * @example
 * ```tsx
 * // Chargement différé d'un composant lourd
 * const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
 *
 * function App() {
 *   return (
 *     <LazyLoad height={400}>
 *       <HeavyComponent />
 *     </LazyLoad>
 *   );
 * }
 *
 * // Avec une hauteur minimale
 * <LazyLoad height="auto" minHeight="50vh">
 *   <DynamicContent />
 * </LazyLoad>
 * ```
 */
interface LazyLoadProps {
  /** Contenu à charger de manière différée */
  children: ReactNode;
  /** Hauteur du conteneur de chargement */
  height?: number | string;
  /** Hauteur minimale du conteneur */
  minHeight?: number | string;
}

export default function LazyLoad({ children, height = 200, minHeight }: LazyLoadProps) {
  return (
    <Suspense
      fallback={
        <Box h={height} mih={minHeight}>
          <Center h="100%">
            <Loader size="lg" />
          </Center>
        </Box>
      }
    >
      {children}
    </Suspense>
  );
}
