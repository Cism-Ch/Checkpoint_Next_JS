import { CSSProperties } from 'react';

export type MantineGradient = {
  from: string;
  to: string;
  deg?: number;
};

export interface GradientTextProps {
  gradient?: MantineGradient;
  style?: CSSProperties;
  variant?: 'gradient';
  className?: string;
}