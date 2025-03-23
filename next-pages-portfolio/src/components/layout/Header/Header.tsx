import { Container, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Brand } from '../../common/Brand/Brand';
import { ProfileAvatar } from '../../common/ProfileAvatar/ProfileAvatar';
import { ThemeToggle } from '../../common/ThemeToggle/ThemeToggle';
import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css';

export default function Header() {
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
