import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Skeleton } from '@mantine/core';

/**
 * @component OptimizedImage
 * @description Composant d'image optimisé qui gère le chargement progressif, les états d'erreur
 * et propose un placeholder animé. Utilise Next.js Image pour l'optimisation automatique et
 * Framer Motion pour les animations fluides.
 *
 * @props
 * - `withSkeleton` (boolean) : Active/désactive l'affichage du placeholder pendant le chargement
 * - `aspectRatio` (number) : Définit le ratio hauteur/largeur de l'image (ex: 16/9)
 * - `alt` (string) : Texte alternatif pour l'accessibilité
 * - Toutes les props de next/image sont supportées sauf onLoadingComplete et onError
 *
 * @states
 * - `isLoading` : Gère l'état de chargement de l'image
 * - `hasError` : Indique si une erreur est survenue lors du chargement
 *
 * @animations
 * - Transition fluide entre le skeleton et l'image via AnimatePresence
 * - Fade-in de l'image une fois chargée
 * - Animation du skeleton pendant le chargement
 *
 * @example
 * ```tsx
 * <OptimizedImage
 *   src="/images/photo.jpg"
 *   alt="Description de l'image"
 *   width={800}
 *   height={600}
 *   withSkeleton={true}
 *   aspectRatio={4/3}
 * />
 * ```
 */
interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete' | 'onError'> {
  /** Active/désactive l'affichage du placeholder pendant le chargement */
  withSkeleton?: boolean;
  /** Définit le ratio hauteur/largeur de l'image (ex: 16/9) */
  aspectRatio?: number;
}

export default function OptimizedImage({
  withSkeleton = true,
  aspectRatio,
  alt,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <Box
      pos="relative"
      style={{
        aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
      }}
    >
      <AnimatePresence mode="wait">
        {withSkeleton && isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Skeleton height="100%" width="100%" radius="md" animate />
          </motion.div>
        )}
      </AnimatePresence>

      {!hasError ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ height: '100%' }}
        >
          <Image
            {...props}
            alt={alt}
            onLoadingComplete={handleLoadingComplete}
            onError={handleError}
            style={{
              ...props.style,
              opacity: isLoading ? 0 : 1,
            }}
          />
        </motion.div>
      ) : (
        <Box
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-gray-2)',
            borderRadius: 'var(--mantine-radius-md)',
            color: 'var(--mantine-color-gray-6)',
            padding: 'var(--mantine-spacing-md)',
            textAlign: 'center',
          }}
        >
          Image non disponible
        </Box>
      )}
    </Box>
  );
}
