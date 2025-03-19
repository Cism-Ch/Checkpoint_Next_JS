import { IconSun, IconMoon } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useTheme } from '../../../theme/hooks/useTheme';
import classes from './ThemeToggle.module.css';

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
