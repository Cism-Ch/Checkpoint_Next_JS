import { MantineProvider } from '@mantine/core';
import { useThemeStore } from '../../../theme/store/themeStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useThemeStore();

  return (
    <MantineProvider
      defaultColorScheme={colorScheme}
      theme={{
        primaryColor: 'brand',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {children}
    </MantineProvider>
  );
} 