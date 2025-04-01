/**
 * Navigation component
 * Composant de navigation responsive avec deux modes d'affichage :
 * - Navigation horizontale pour les écrans larges
 * - Menu burger avec drawer pour mobile
 *
 * @module Navigation
 */

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Group, Burger, Drawer, Stack, Box, useMantineTheme } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import classes from './Navigation.module.css';

/**
 * Configuration des liens de navigation
 * Définit les routes principales de l'application
 */
const navigation = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Projets', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

/**
 * Composant principal de navigation
 * Gère l'affichage adaptatif de la navigation selon la taille d'écran
 *
 * @returns {JSX.Element} Composant de navigation
 */
export default function Navigation() {
  // Hooks pour la gestion de l'état et du responsive
  const router = useRouter();                                     // Gestion du routage
  const [opened, { toggle }] = useDisclosure(false);             // État du drawer mobile
  const isMobile = useMediaQuery('(max-width: 768px)');         // Détection du mode mobile
  const theme = useMantineTheme();                              // Thème Mantine

  /**
   * Génération des boutons de navigation
   * Chaque bouton est stylisé en fonction de son état actif/inactif
   * et s'adapte au mode mobile/desktop
   */
  const navigationItems = navigation.map((item) => (
    <Button
      key={item.path}
      component={Link}
      href={item.path}
      variant={router.pathname === item.path ? 'outline' : 'subtle'}
      color={router.pathname === item.path ? 'orange' : undefined}
      style={{
        color: router.pathname !== item.path ? 'var(--mantine-color-text)' : undefined,
      }}
      fullWidth={isMobile}
      size={isMobile ? 'lg' : 'md'}
    >
      {item.label}
    </Button>
  ));

  // Rendu de la version mobile avec menu burger
  if (isMobile) {
    return (
      <div className={classes.navContent}>
        <Box
          className={classes.navWrapper}
          style={theme.other.glassmorphism({
            blur: 28,
            opacity: 1,
            withShadow: true
          })}
        >
          <Group justify='center'>
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          </Group>
          
          {/* Drawer pour le menu mobile */}
          <Drawer
            opened={opened}
            onClose={toggle}
            title="Menu"
            position="top"
            size="md"
            padding="lg"
            overlayProps={{
              opacity: 1,
              blur: 25,
            }}
            classNames={{
              content: classes.drawerContent,
              header: classes.drawerHeader,
            }}
          >
            <Stack gap="md" p="lg">
              {navigationItems}
            </Stack>
          </Drawer>
        </Box>
      </div>
    );
  }

  // Rendu de la version desktop avec navigation horizontale
  return (
    <Box
      className={classes.navWrapper}
      style={theme.other.glassmorphism({
        blur: 25,
        opacity: 1,
        withShadow: true
      })}
    >
      <div className={classes.navContent}>
        <Group justify="center" gap="sm" role="navigation" wrap="nowrap">
          {navigationItems}
        </Group>
      </div>
    </Box>
  );
}
