import Link from 'next/link';
import { Group, Text } from '@mantine/core';
import classes from './Brand.module.css';

interface BrandProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gradient' | 'simple' | 'glow';
}

const variantStyles = {
  gradient: {
    variant: 'gradient' as const,
    gradient: { from: 'orange', to: 'red', deg: 45 },
  },
  simple: {
    variant: 'text' as const,
  },
  glow: {
    variant: 'text' as const,
    className: classes.glow,
  },
};

export function Brand({ size = 'lg', variant = 'gradient' }: BrandProps) {
  const textSize = {
    sm: 'md',
    md: 'lg',
    lg: 'xl',
  }[size];

  return (
    <>
      <Link 
        href="/" 
        className={`${classes.brand} ${classes[variant]}`}
        aria-label="Retour à l'accueil"
      >
        <Group gap={4} wrap="nowrap">
          <Text
            component="span"
            size={textSize}
            fw={700}
            {...variantStyles[variant]}
          >
            Cism-Ch
          </Text>
        </Group>
      </Link>
    </>
  );
}
