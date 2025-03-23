import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Group, Burger, Drawer, Stack, Box, useMantineTheme } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import classes from './Navigation.module.css';

const navigation = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Projets', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();

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
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
          </Group>
          
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
