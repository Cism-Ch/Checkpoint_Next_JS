import { MantineTheme } from '@mantine/core';
import { createGlassmorphismStyles, GlassmorphismProps } from '../styles/glassmorphism';

/**
 * Crée les styles du composant Glassmorphism
 * @param _theme - Le thème Mantine
 * @param params - Les propriétés de configuration de l'effet glassmorphism
 * @returns Styles pour le composant
 * 
 * @example
 * ```tsx
 * <Box className={classes.glassmorphism}>
 *   <YourContent />
 * </Box>
 * ```
 */
export const createGlassmorphismComponent = (_theme: MantineTheme) => ({
  defaultProps: {},
  styles: (_theme: MantineTheme, params: GlassmorphismProps = {}) => ({
    root: {
      position: 'relative',
      overflow: 'hidden',
      ...createGlassmorphismStyles(params),
    },
  }),
});

/**
 * Extension du thème Mantine pour ajouter la fonction glassmorphism
 */
export const GlassmorphismThemeExtension = {
  components: {
    Glassmorphism: createGlassmorphismComponent,
  },
  fn: {
    glassmorphism: createGlassmorphismStyles,
  },
};
