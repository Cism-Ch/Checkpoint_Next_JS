import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from '@tabler/icons-react';
import { ActionIcon, Container, Group, Stack, Text } from '@mantine/core';
import classes from './Footer.module.css';

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

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg" >
        <div className={classes.inner}>
          <Stack gap="xl">
            <Text size="xl" fw={800}>
              Portfolio
            </Text>
            <Text size="md" c="dimmed">
              © {new Date().getFullYear()} Tous droits réservés.
            </Text>
          </Stack>

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
