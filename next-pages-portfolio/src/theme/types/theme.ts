export type ThemeMode = 'light' | 'dark' | 'auto';

export interface ThemeState {
  colorScheme: ThemeMode;
  isAuto: boolean;
}

export interface ThemeStore extends ThemeState {
  setColorScheme: (scheme: ThemeMode) => void;
  toggleColorScheme: () => void;
  setAuto: (isAuto: boolean) => void;
}

export interface UseThemeReturn {
  isDark: boolean;
  colorScheme: ThemeMode;
  systemTheme: ThemeMode;
  isAuto: boolean;
  toggleColorScheme: () => void;
  setColorScheme: (scheme: ThemeMode) => void;
  setAuto: (auto: boolean) => void;
} 