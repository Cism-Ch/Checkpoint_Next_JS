/**
 * 500 Page - Custom error page for handling server-side errors
 * Features animated components and provides options to retry or return home
 * Shares animation components with 404 page for consistency
 */
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import SEO from '../src/components/seo/SEO';

/**
 * Reusable animated title component
 * Provides fade-in and slide-up animation for error code display
 * @param {any} props - Component props including children for title content
 */
const AnimatedTitle = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    <Title order={1} size="3rem" mb="xl">
      {children}
    </Title>
  </motion.div>
);

/**
 * Reusable animated text component
 * Provides delayed fade-in and slide-up animation for error descriptions
 * @param {any} props - Component props including children for text content
 */
const AnimatedText = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    {...props}
  >
    <Text size="xl" mb="xl">
      {children}
    </Text>
  </motion.div>
);

/**
 * ServerError page component
 * Displays a 500 error message with:
 * - Animated title and description
 * - SEO optimization for server error
 * - Two action buttons:
 *   1. Return home button
 *   2. Retry button that reloads the page
 * - Consistent styling with theme and 404 page
 */
export default function ServerError() {
  return (
    <>
      <SEO title="Erreur serveur" description="Une erreur serveur s'est produite." />
      <Container size="md" py="xl" style={{ textAlign: 'center' }}>
        <AnimatedTitle>500</AnimatedTitle>
        <AnimatedText>Oups ! Une erreur s'est produite sur notre serveur.</AnimatedText>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Group justify="center">
            <Button
              component={Link}
              href="/"
              size="lg"
              variant="gradient"
              style={{
                backgroundImage:
                  'linear-gradient(45deg, var(--mantine-color-blue-filled), var(--mantine-color-cyan-filled))',
              }}
            >
              Retour à l'accueil
            </Button>
            <Button onClick={() => window.location.reload()} size="lg" variant="light">
              Réessayer
            </Button>
          </Group>
        </motion.div>
      </Container>
    </>
  );
}
