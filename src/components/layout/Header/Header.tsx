/**
 * Header component
 * Composant d'en-tête principal de l'application
 * Gère l'affichage du logo, de la navigation et des contrôles principaux
 * S'adapte en fonction de la taille de l'écran (responsive)
 *
 * @module Header
 */

import { Container, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Brand } from '../../common/Brand/Brand';
import { ProfileAvatar } from '../../common/ProfileAvatar/ProfileAvatar';
import { ThemeToggle } from '../../common/ThemeToggle/ThemeToggle';
import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css';

/**
 * Composant principal Header
 * Structure l'en-tête du site en trois sections :
 * - Gauche : Logo et avatar de profil (sur desktop)
 * - Centre : Navigation principale
 * - Droite : Contrôle du thème
 *
 * @returns {JSX.Element} Composant d'en-tête responsive
 */
export default function Header() {
  // Hook pour la détection du mode mobile
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className={classes.section}>
            <Group gap="sm" wrap="nowrap">
              {!isMobile && <ProfileAvatar size="md" />}
              <Brand />
            </Group>
          </div>
          <div className={`${classes.section} ${classes.navigationWrapper}`}>
            <Navigation />
          </div>
          <div className={classes.section}>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
