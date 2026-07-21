/**
 * Footer.tsx
 * 
 * Composant de pied de page pour l'ensemble du site.
 * Affiche les liens vers les réseaux sociaux, le copyright et les technologies utilisées.
 * Responsive et s'adapte aux différentes tailles d'écran.
 */

import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from '@tabler/icons-react';
import { ActionIcon, Container, Group, Stack, Text } from '@mantine/core';
import classes from './Footer.module.css';

/**
 * Configuration des liens sociaux à afficher dans le footer
 * Chaque objet contient l'icône, l'URL et le label pour l'accessibilité
 */
const socialLinks = [
  {
    icon: IconBrandGithub,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: IconBrandLinkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: IconBrandTwitter,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
  {
    icon: IconMail,
    href: 'mailto:your.email@example.com',
    label: 'Email',
  },
];

/**
 * Composant principal du pied de page
 */
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg" >
        {/* Partie principale du footer avec logo et liens sociaux */}
        <div className={classes.inner}>
          {/* Partie gauche: Nom du site et copyright */}
          <Stack gap="xl">
            <Text size="xl" fw={800}>
              Portfolio
            </Text>
            <Text size="md" c="dimmed">
              © {new Date().getFullYear()} Tous droits réservés.
            </Text>
          </Stack>

          {/* Partie droite: Icônes de réseaux sociaux */}
          <Group gap="md" justify="flex-end" wrap="nowrap">
            {socialLinks.map((link) => (
              <ActionIcon
                key={link.label}
                size="lg"
                color="orange"
                variant="outline"
                component="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon style={{ width: 24, height: 24, }} stroke={2.0} />
              </ActionIcon>
            ))}
          </Group>
        </div>

        {/* Partie inférieure du footer - crédits des technologies */}
        <Group justify="center" className={classes.afterFooter}>
          <Text size="sm" c="dimmed">
            Développé avec passion en utilisant{' '}
            <Link href="https://nextjs.org" target="_blank" className={classes.link}>
              Next.js
            </Link>
            ,{' '}
            <Link href="https://mantine.dev" target="_blank" className={classes.link}>
              Mantine
            </Link>
            , et{' '}
            <Link href="https://www.framer.com/motion/" target="_blank" className={classes.link}>
              Framer Motion
            </Link>
          </Text>
        </Group>
      </Container>
    </footer>
  );
}
