import Link from 'next/link';
import { Group, Text } from '@mantine/core';
import classes from './Brand.module.css';

/**
 * @component Brand
 * @description Composant de marque affichant le logo/nom du site avec différents styles et tailles.
 * Utilise next/link pour la navigation et les composants Mantine pour le styling.
 *
 * @props
 * @param {('sm' | 'md' | 'lg')} [size='lg'] - Taille du texte
 *   - 'sm': Petite taille (utilise la taille de texte 'md' de Mantine)
 *   - 'md': Taille moyenne (utilise la taille de texte 'lg' de Mantine)
 *   - 'lg': Grande taille (utilise la taille de texte 'xl' de Mantine)
 *
 * @param {('gradient' | 'simple' | 'glow')} [variant='gradient'] - Style visuel
 *   - 'gradient': Dégradé orange-rouge
 *   - 'simple': Texte simple sans effets
 *   - 'glow': Texte avec effet de lueur (défini dans Brand.module.css)
 *
 * @styles
 * - Utilise CSS Modules pour les styles personnalisés
 * - Intègre les variants de style de Mantine
 * - Supporte les styles de transition pour les interactions
 *
 * @accessibility
 * - Inclut un aria-label pour la navigation
 * - Maintient une hiérarchie de navigation claire
 * - Assure une taille de texte lisible à toutes les échelles
 *
 * @example
 * ```tsx
 * // Dans le header
 * <Brand size="lg" variant="gradient" />
 *
 * // Version simple dans le footer
 * <Brand size="sm" variant="simple" />
 * ```
 */
interface BrandProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gradient' | 'simple' | 'glow';
}

const variantStyles = {
  gradient: {
    variant: 'gradient' as const,
    gradient: { from: 'orange', to: 'red', deg: 45 },
  },
  simple: {
    variant: 'text' as const,
  },
  glow: {
    variant: 'text' as const,
    className: classes.glow,
  },
};

export function Brand({ size = 'lg', variant = 'gradient' }: BrandProps) {
  const textSize = {
    sm: 'md',
    md: 'lg',
    lg: 'xl',
  }[size];

  return (
    <>
      <Link 
        href="/" 
        className={`${classes.brand} ${classes[variant]}`}
        aria-label="Retour à l'accueil"
      >
        <Group gap={4} wrap="nowrap">
          <Text
            component="span"
            size={textSize}
            fw={700}
            {...variantStyles[variant]}
          >
            Cism-Ch
          </Text>
        </Group>
      </Link>
    </>
  );
}
