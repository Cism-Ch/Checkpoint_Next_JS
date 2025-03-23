import { createTheme, MantineTheme, rem } from '@mantine/core';
import { createGlassmorphismStyles } from './styles/glassmorphism';

export const theme = createTheme({
  other: {
    glassmorphism: createGlassmorphismStyles,
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  primaryColor: 'brand',

  /* Configuration des couleurs */
  colors: {
    brand: [
      '#FFBA44',
      '#FFAE45',
      '#FFA246',
      '#FF9647',
      '#FF8A48',
      '#FF7D49',
      '#FF714A',
      '#FF654B',
      '#FF594C',
      '#FF4D4D',
    ],
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#070707',
    ],
    gray: [
      '#F8F9FA',
      '#F1F3F5',
      '#E9ECEF',
      '#DEE2E6',
      '#CED4DA',
      '#ADB5BD',
      '#868E96',
      '#495057',
      '#343A40',
      '#212529',
    ],
  },

  /* Configuration typographique */
  fontFamily:
    'Raleway, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily:
      'Raleway, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    sizes: {
      h1: { fontSize: rem(44), lineHeight: '1.3', fontWeight: '700' },
      h2: { fontSize: rem(36), lineHeight: '1.35', fontWeight: '600' },
      h3: { fontSize: rem(28), lineHeight: '1.4', fontWeight: '600' },
      h4: { fontSize: rem(22), lineHeight: '1.4', fontWeight: '500' },
      h5: { fontSize: rem(18), lineHeight: '1.45', fontWeight: '500' },
      h6: { fontSize: rem(16), lineHeight: '1.5', fontWeight: '500' },
    },
  },

  /* Configuration des espacements */
  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },

  /* Configuration des breakpoints */
  breakpoints: {
    xs: '36em', // 576px
    sm: '48em', // 768px
    md: '62em', // 992px
    lg: '75em', // 1200px
    xl: '88em', // 1408px
  },

  /* Configuration des radius */
  radius: {
    xs: rem(2),
    sm: rem(4),
    md: rem(8),
    lg: rem(16),
    xl: rem(32),
  },

  /* Configuration des shadows */
  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
    md: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    lg: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
    xl: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
  },

  /* Configuration des composants par défaut */
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
        size: 'md',
      },
      styles: (_theme: MantineTheme) => ({
        root: {
          transition: 'all 200ms ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
          '&[data-variant="subtle"]': {
            color: 'var(--mantine-color-text)',
          }
        },
      }),
    },
    Card: {
      defaultProps: {
        radius: 'xl',
        shadow: 'sm',
      },
    },
    Anchor: {
      defaultProps: {
        underline: 'hover',
      },
      styles: (_theme: MantineTheme) => ({
        root: {
          color: 'var(--mantine-color-text)',
          '&:hover': {
            opacity: 0.8,
          },
        },
      }),
    },
    Link: {
      styles: (_theme: MantineTheme) => ({
        root: {
          color: 'var(--mantine-color-text)',
          '&:hover': {
            opacity: 0.8,
          },
        },
      }),
    },
  },
});
