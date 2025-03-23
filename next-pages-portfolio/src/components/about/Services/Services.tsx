import { IconCode, IconDeviceMobile, IconPalette, IconServer } from '@tabler/icons-react';
import { Box, Paper, SimpleGrid, Text, Title, rem } from '@mantine/core';
import ScrollAnimation from '../../animations/ScrollAnimation';


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
    <Box py={80} px={80} bg="light-dark(var(--mantine-color-gray-1),var(--mantine-color-dark-9))" style={{ borderRadius: rem(20) }}>
      <Title order={2} ta="center" mb={90} size="h1" style={{
        color: 'var(--mantine-color-text)',
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-pink-filled), var(--mantine-color-orange-filled))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Mes Services
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
        {services.map((service, index) => (
          <ScrollAnimation
            key={service.title}
            direction="up"
            delay={index * 0.1}
            once
          >
            <Paper
              p="xl"
              radius="lg"
              withBorder
              shadow="md"
              styles={{
                root: {
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  backgroundColor: 'light-dark(var(--mantine-color-gray-1),var(--mantine-color-black))',
                  backdropFilter: 'blur(25px)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 'var(--mantine-shadow-md)',
                  },
                },
              }}
            >
              <ScrollAnimation direction="right" delay={index * 0.1 + 0.2} once>
                <service.icon
                  size={64}
                  stroke={1.5}
                  style={{
                    marginBottom: rem(20),
                    color: 'var(--mantine-color-pink-filled)',
                    opacity: 0.8,
                  }}
                />
              </ScrollAnimation>
              <Text size="xl" fw={600} mb="sm" style={{
                backgroundImage: 'linear-gradient(45deg, var(--mantine-color-pink-filled), var(--mantine-color-orange-filled))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {service.title}
              </Text>
              <Text size="md" c="dimmed" style={{ maxWidth: rem(300) }}>
                {service.description}
              </Text>
            </Paper>
          </ScrollAnimation>
        ))}
      </SimpleGrid>
    </Box>
  );
}
