/**
 * 404 Page - Custom error page for handling not found routes
 * Features animated components and a user-friendly interface to guide users back to the home page
 */
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import SEO from '../src/components/seo/SEO';

/**
 * Animated title component with fade-in and slide-up animation
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
 * Animated text component with delayed fade-in and slide-up animation
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
 * NotFound page component
 * Displays a 404 error message with:
 * - Animated title and description
 * - SEO optimization for error page
 * - Call-to-action button to return home
 * - Consistent styling with the main theme
 */
export default function NotFound() {
  return (
    <>
      <SEO title="Page non trouvée" description="La page que vous recherchez n'existe pas." />
      <Container size="md" py="xl" style={{ textAlign: 'center' }}>
        <AnimatedTitle>404</AnimatedTitle>
        <AnimatedText>Oups ! La page que vous recherchez semble avoir disparu.</AnimatedText>
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
          </Group>
        </motion.div>
      </Container>
    </>
  );
}
