import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import SEO from '../src/components/seo/SEO';

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
