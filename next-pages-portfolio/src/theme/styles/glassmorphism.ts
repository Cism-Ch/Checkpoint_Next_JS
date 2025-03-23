import type { CSSProperties } from 'react';

/**
 * Configuration des propriétés de l'effet glassmorphism
 * @property {number} blur - Intensité de l'effet de flou (en pixels)
 * @property {number} opacity - Niveau de transparence (0-1)
 * @property {number} borderWidth - Épaisseur de la bordure (en pixels)
 * @property {boolean} withShadow - Ajoute une ombre portée
 */
export interface GlassmorphismProps {
  /** Intensité de l'effet de flou en pixels */
  blur?: number;
  /** Niveau de transparence (entre 0 et 1) */
  opacity?: number;
  /** Épaisseur de la bordure en pixels */
  borderWidth?: number;
  /** Active ou désactive l'ombre portée */
  withShadow?: boolean;
}

/**
 * Crée les styles CSS pour l'effet glassmorphism
 * Utilise les variables CSS de Mantine V7 pour la gestion des thèmes
 */
export function createGlassmorphismStyles(props: GlassmorphismProps = {}): CSSProperties {
  const {
    blur = 8,
    opacity = 0.7,
    borderWidth = 1,
    withShadow = true,
  } = props;

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: `var(--mantine-color-body, rgba(var(--mantine-color-background-rgb), ${opacity}))`,
    borderWidth,
    borderStyle: 'solid',
    borderColor: 'var(--mantine-color-default-border)',
    ...(withShadow && {
      boxShadow: 'var(--mantine-shadow-sm)',
    }),
    transition: 'var(--mantine-transition-default)',
  };
}
