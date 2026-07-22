import type { CSSProperties } from 'react';

/**
 * Configuration des propriétés de l'effet Glassmorphism 2.0 (UI/UX Pro Max)
 */
export interface GlassmorphismProps {
  /** Intensité du flou en pixels (default: 12) */
  blur?: number;
  /** Niveau d'opacité de fond (default: 0.75) */
  opacity?: number;
  /** Épaisseur de la bordure lumineuse (default: 1) */
  borderWidth?: number;
  /** Ombres portées haute définition */
  withShadow?: boolean;
  /** Saturation des couleurs d'arrière-plan (default: 180%) */
  saturate?: number;
}

/**
 * Génère les styles Glassmorphism 2.0 adaptatifs (supporte le mode clair et sombre via light-dark)
 */
export function createGlassmorphismStyles(props: GlassmorphismProps = {}): CSSProperties {
  const {
    blur = 12,
    opacity = 0.75,
    borderWidth = 1,
    withShadow = true,
    saturate = 180,
  } = props;

  return {
    backdropFilter: `blur(${blur}px) saturate(${saturate}%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(${saturate}%)`,
    backgroundColor: `light-dark(rgba(255, 255, 255, ${opacity}), rgba(15, 23, 42, ${opacity}))`,
    borderWidth,
    borderStyle: 'solid',
    borderColor: 'light-dark(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.12))',
    ...(withShadow && {
      boxShadow: 'light-dark(0 4px 20px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.37))',
    }),
    transition: 'var(--transition-normal, 250ms cubic-bezier(0.4, 0, 0.2, 1))',
  };
}
