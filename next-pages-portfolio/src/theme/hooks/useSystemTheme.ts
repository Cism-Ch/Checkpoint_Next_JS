import { useEffect, useState } from 'react';
import { useThemeStore } from '../store/themeStore';
import { ThemeMode } from '../types/theme';

export function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<ThemeMode>('light');
  const { isAuto, setColorScheme } = useThemeStore();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setSystemTheme(newTheme);
      
      if (isAuto) {
        setColorScheme(newTheme);
      }
    };

    // Vérifier la préférence initiale
    handleChange(mediaQuery);

    // Écouter les changements
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [isAuto, setColorScheme]);

  return systemTheme;
} 