import { IconSun, IconMoon } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useTheme } from '../../../theme/hooks/useTheme';
import classes from './ThemeToggle.module.css';

/**
 * @component ThemeToggle
 * @description Bouton de basculement entre les thèmes clair et sombre de l'application.
 * Utilise le hook personnalisé useTheme pour gérer l'état du thème et sa persistance.
 *
 * @implementation
 * - Utilise le composant ActionIcon de Mantine pour une apparence cohérente
 * - Affiche une icône de soleil ou de lune selon le thème actuel
 * - Intègre des styles CSS modules pour l'animation et l'apparence
 *
 * @hooks
 * - useTheme : Hook personnalisé qui fournit :
 *   - isDark : Booléen indiquant si le thème sombre est actif
 *   - toggleColorScheme : Fonction pour basculer entre les thèmes
 *
 * @accessibility
 * - Inclut un aria-label descriptif pour les lecteurs d'écran
 * - Utilise un bouton ActionIcon pour une interaction clavier native
 * - Fournit un retour visuel clair via le changement d'icône
 *
 * @example
 * ```tsx
 * // Dans un composant de navigation ou header
 * import { ThemeToggle } from '../common/ThemeToggle';
 *
 * export function Header() {
 *   return (
 *     <header>
 *       <ThemeToggle />
 *     </header>
 *   );
 * }
 * ```
 */
export const ThemeToggle = () => {
  const { isDark, toggleColorScheme } = useTheme();

  return (
    <ActionIcon
      variant="default"
      onClick={toggleColorScheme}
      size="lg"
      aria-label="Basculer le thème"
      data-testid="theme-toggle"
      className={classes.toggle}
    >
      {isDark ? (
        <IconSun size={20} />
      ) : (
        <IconMoon size={20} />
      )}
    </ActionIcon>
  );
};
