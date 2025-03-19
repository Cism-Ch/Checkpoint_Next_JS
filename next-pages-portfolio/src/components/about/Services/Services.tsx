import { IconCode, IconDeviceMobile, IconPalette, IconServer } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Box, Card, SimpleGrid, Text, Title } from '@mantine/core';
import { fadeInUp, staggerContainer } from '../../../utils/animations';

const AnimatedCard = ({ children, ...props }: any) => (
  <motion.div variants={fadeInUp} initial="initial" animate="animate" {...props}>
    <Card padding="xl" radius="md" withBorder>
      {children}
    </Card>
  </motion.div>
);

const services = [
  {
    icon: IconCode,
    title: 'Développement Front-end',
    description:
      "Création d'interfaces utilisateur modernes et réactives avec React, Next.js et TypeScript.",
  },
  {
    icon: IconServer,
    title: 'Développement Back-end',
    description:
      "Conception et développement d'APIs RESTful avec Node.js, Express et bases de données SQL/NoSQL.",
  },
  {
    icon: IconDeviceMobile,
    title: 'Responsive Design',
    description:
      "Création d'applications web adaptatives offrant une expérience optimale sur tous les appareils.",
  },
  {
    icon: IconPalette,
    title: 'UI/UX Design',
    description:
      "Conception d'interfaces utilisateur intuitives et esthétiques centrées sur l'expérience utilisateur.",
  },
];

export default function Services() {
  return (
    <Box py={50}>
      <Title order={2} ta="center" mb={50}>
        Mes Services
      </Title>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          {services.map((service, index) => (
            <AnimatedCard key={index}>
              <service.icon
                size={40}
                stroke={1.5}
                style={{ marginBottom: 20, color: 'var(--mantine-color-blue-filled)' }}
              />
              <Text size="lg" fw={500} mb="sm">
                {service.title}
              </Text>
              <Text size="sm" c="dimmed">
                {service.description}
              </Text>
            </AnimatedCard>
          ))}
        </SimpleGrid>
      </motion.div>
    </Box>
  );
}
