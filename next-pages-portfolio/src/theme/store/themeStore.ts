import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeStore, ThemeMode } from '../types/theme';

const STORAGE_KEY = 'theme-store';

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      colorScheme: 'auto',
      isAuto: true,
      setColorScheme: (scheme: ThemeMode) => set({ colorScheme: scheme, isAuto: scheme === 'auto' }),
      toggleColorScheme: () =>
        set((state) => {
          const newScheme = state.colorScheme === 'dark' ? 'light' : 'dark';
          return { colorScheme: newScheme, isAuto: false };
        }),
      setAuto: (isAuto: boolean) =>
        set({ isAuto, colorScheme: isAuto ? 'auto' : 'light' }),
    }),
    {
      name: STORAGE_KEY,
      skipHydration: true,
    }
  )
); 