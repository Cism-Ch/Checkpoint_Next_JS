import { ReactNode, Suspense } from 'react';
import { Box, Center, Loader } from '@mantine/core';

interface LazyLoadProps {
  children: ReactNode;
  height?: number | string;
  minHeight?: number | string;
}

export default function LazyLoad({ children, height = 200, minHeight }: LazyLoadProps) {
  return (
    <Suspense
      fallback={
        <Box h={height} mih={minHeight}>
          <Center h="100%">
            <Loader size="lg" />
          </Center>
        </Box>
      }
    >
      {children}
    </Suspense>
  );
}
