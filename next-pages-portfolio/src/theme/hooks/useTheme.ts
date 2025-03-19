import { useEffect } from 'react';
import { useMantineColorScheme } from '@mantine/core';
import { useThemeStore } from '../store/themeStore';
import { useSystemTheme } from './useSystemTheme';
import { UseThemeReturn, ThemeMode } from '../types/theme';

export const useTheme = (): UseThemeReturn => {
  const { colorScheme: mantineColorScheme, toggleColorScheme: mantineToggleColorScheme } = useMantineColorScheme();
  const { isAuto, setColorScheme, setAuto } = useThemeStore();
  const systemTheme = useSystemTheme();

  const colorScheme = (mantineColorScheme === 'auto' ? systemTheme : mantineColorScheme) as ThemeMode;
  const isDark = colorScheme === 'dark';

  const handleToggleColorScheme = () => {
    const newColorScheme = isDark ? 'light' : 'dark';
    mantineToggleColorScheme();
    setColorScheme(newColorScheme);
  };

  // Hydration du store après le montage
  useEffect(() => {
    useThemeStore.persist.rehydrate();
  }, []);

  return {
    isDark,
    colorScheme,
    systemTheme,
    isAuto,
    toggleColorScheme: handleToggleColorScheme,
    setColorScheme,
    setAuto,
  };
}; 