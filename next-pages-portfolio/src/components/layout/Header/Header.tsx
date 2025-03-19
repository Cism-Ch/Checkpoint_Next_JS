import { Container } from '@mantine/core';
import { Brand } from '../../common/Brand/Brand';
import { ThemeToggle } from '../../common/ThemeToggle/ThemeToggle';
import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className={classes.section}>
            <Brand />
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
