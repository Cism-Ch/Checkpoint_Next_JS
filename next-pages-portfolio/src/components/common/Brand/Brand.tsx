import Link from 'next/link';
import { Text } from '@mantine/core';
import classes from './Brand.module.css';

export function Brand() {
  return (
    <Link href="/" className={classes.brand}>
      <Text size="lg" fw={700}>
        Cism-Ch
      </Text>
    </Link>
  );
}
