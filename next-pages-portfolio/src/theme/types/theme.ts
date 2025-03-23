import { CSSProperties } from 'react';
import { GlassmorphismProps } from '../styles/glassmorphism';

declare module '@mantine/core' {
  export interface MantineThemeOther {
    glassmorphism: (props?: GlassmorphismProps) => CSSProperties;
    transitionTimingFunction: string;
    transitionDuration: string;
  }
}
