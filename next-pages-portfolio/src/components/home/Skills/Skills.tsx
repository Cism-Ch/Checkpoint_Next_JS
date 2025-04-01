/**
 * Skills Component
 * Affiche une grille de compétences techniques avec des indicateurs visuels de niveau
 * et des animations au défilement
 *
 * @module Skills
 */

import {
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
  IconBrandHtml5,
  IconBrandCss3,
  IconServer2
} from '@tabler/icons-react';
import { Box, Group, Paper, RingProgress, SimpleGrid, Stack, Text, Title, rem } from '@mantine/core';
import ScrollAnimation from '../../animations/ScrollAnimation';

/**
 * Configuration des compétences
 * @typedef {Object} Skill
 * @property {string} name - Nom de la compétence
 * @property {React.ComponentType} icon - Icône représentant la compétence
 * @property {number} level - Niveau de maîtrise (0-100)
 * @property {string} color - Couleur associée à la compétence (hex)
 * @property {string} description - Description courte de la compétence
 */
const skills = [
  {
    name: 'React',
    icon: IconBrandReact,
    level: 90,
    color: '#61DAFB',
    description: "Développement d'interfaces modernes et réactives",
  },
  {
    name: 'Next.js',
    icon: IconBrandNextjs,
    level: 85,
    color: '#909090',
    description: 'Applications web full-stack avec rendu côté serveur',
  },
  {
    name: 'Node.js',
    icon: IconBrandNodejs,
    level: 80,
    color: '#339933',
    description: 'Développement backend et API RESTful',
  },
  {
    name: 'TypeScript',
    icon: IconBrandTypescript,
    level: 85,
    color: '#3178C6',
    description: 'Développement typé et maintenable',
  },
  {
    name: 'Base de données',
    icon: IconDatabase,
    level: 75,
    color: '#336791',
    description: 'SQL et NoSQL (PostgreSQL, MongoDB)',
  },
  {
    name: 'CSS/Tailwind',
    icon: IconBrandTailwind,
    level: 88,
    color: '#38B2AC',
    description: 'Styles modernes et responsive design',
  },
  {
    name: 'HTML5',
    icon: IconBrandHtml5,
    level: 90,
    color: '#E34F26',
    description: 'Structure sémantique et accessibilité web',
  },
  {
    name: 'CSS3',
    icon: IconBrandCss3,
    level: 85,
    color: '#1572B6',
    description: 'Styles avancés et animations CSS',
  },
  {
    name: 'Express.js',
    icon: IconServer2,
    level: 80,
    color: '#FF0040',
    description: 'Framework Node.js pour API REST et applications web',
  },
];

/**
 * Composant d'affichage des compétences
 * Présente une grille responsive de cartes de compétences avec :
 * - Animations au défilement
 * - Indicateurs de progression circulaires
 * - Icônes et descriptions
 * - Effets de survol
 *
 * @returns {JSX.Element} Grille de compétences
 */
export default function Skills() {
  return (
    <Box py={80} px={80} bg="light-dark(var(--mantine-color-gray-1),var(--mantine-color-dark-9))" style={{ borderRadius: rem(20) }}>
      <Title order={2} ta="center" mb={90} size="h1" style={{
        color: 'var(--mantine-color-text)',
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-pink-filled), var(--mantine-color-orange-filled))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Mes Compétences
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={30}>
        {skills.map((skill, index) => (
          <ScrollAnimation
            key={skill.name}
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
              <Stack gap="md">
                <Group justify="space-between" align="flex-start" >
                  <Stack gap={4}>
                    <Text size="xl" fw={600} style={{ color: skill.color }}>
                      {skill.name}
                    </Text>
                    <Text size="md" c="dimmed" style={{ maxWidth: rem(220) }}>
                      {skill.description}
                    </Text>
                  </Stack>
                  <ScrollAnimation
                    direction="left"
                    delay={index * 0.1 + 0.2}
                    once
                  >
                    <RingProgress
                      size={100}
                      roundCaps
                      thickness={4}
                      sections={[{ value: skill.level, color: skill.color }]}
                      label={
                        <Box ta="center">
                          <Text size="md" fw={600} style={{color: skill.color}}>
                            {skill.level}%
                          </Text>
                        </Box>
                      }
                    />
                  </ScrollAnimation>
                </Group>
                <ScrollAnimation
                  direction="right"
                  delay={index * 0.1 + 0.3}
                  once
                >
                  <Box>
                    <skill.icon
                      size={64}
                      stroke={1.5}
                      style={{
                        color: skill.color,
                        opacity: 0.8,
                      }}
                    />
                  </Box>
                </ScrollAnimation>
              </Stack>
            </Paper>
          </ScrollAnimation>
        ))}
      </SimpleGrid>
    </Box>
  );
}
