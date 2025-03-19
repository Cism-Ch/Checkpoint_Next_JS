import { ColorSchemeScript } from '@mantine/core';

export function ThemeColorScript() {
  return (
    <ColorSchemeScript
      defaultColorScheme="auto"
      localStorageKey="mantine-color-scheme"
    />
  );
} 