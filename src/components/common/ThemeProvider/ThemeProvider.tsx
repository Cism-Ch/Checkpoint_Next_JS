// Import du provider de thème de Mantine UI
import { MantineProvider } from '@mantine/core';
// Import du store personnalisé pour gérer le thème de l'application
import { useThemeStore } from '../../../theme/store/themeStore';

/**
 * Composant ThemeProvider - Configure le thème global de l'application
 * 
 * Utilise MantineProvider pour appliquer des styles cohérents à tous les composants Mantine
 * et s'appuie sur un store Zustand pour la gestion du mode clair/sombre
 * 
 * @param {React.ReactNode} children - Les composants enfants qui hériteront du thème
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Récupération du mode de couleur (clair/sombre) depuis le store global
  const { colorScheme } = useThemeStore();

  return (
    <MantineProvider
      // Application du thème clair ou sombre selon la préférence utilisateur
      defaultColorScheme={colorScheme}
      // Configuration globale du thème
      theme={{
        primaryColor: 'brand', // Utilisation d'une couleur personnalisée 'brand'
        fontFamily: 'Inter, sans-serif', // Police principale de l'application
      }}
    >
      {children}
    </MantineProvider>
  );
}