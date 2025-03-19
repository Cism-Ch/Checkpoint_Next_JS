import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Group } from '@mantine/core';
import classes from './Navigation.module.css';

const navigation = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Projets', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const router = useRouter();

  return (
    <div className={classes.navWrapper}>
      <div className={classes.navContent}>
        <Group gap="md" role="navigation">
          {navigation.map((item) => (
            <Button
              key={item.path}
              component={Link}
              href={item.path}
              variant={router.pathname === item.path ? 'outline' : 'subtle'}
              color={router.pathname === item.path ? 'orange' : undefined}
              style={{
                color: router.pathname !== item.path 
                  ? 'var(--mantine-color-text)'
                  : undefined,
                margin: '5px 10px',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Group>
      </div>
    </div>
  );
}
