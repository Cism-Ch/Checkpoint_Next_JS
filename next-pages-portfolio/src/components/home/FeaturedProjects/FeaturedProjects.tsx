import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Group, Stack, Text, Title } from '@mantine/core';
import ScrollAnimation from '../../animations/ScrollAnimation';
import { projects } from '../../../data/projects';
import classes from './FeaturedProjects.module.css';

// Filtre les projets mis en avant
const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3); // Limite à 3 projets

export default function FeaturedProjects() {
  return (
    <Box className={classes.container}>
      <Box className={classes.inner}>
        <Stack gap="xl">
          <ScrollAnimation direction="up">
            <Stack gap="xl" align="center">
              <Title
                order={2}
                size='h1'
                style={{
                  color: 'var(--mantine-color-text)',
                  backgroundImage:
                    'linear-gradient(45deg, var(--mantine-color-pink-filled), var(--mantine-color-yellow-filled))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: 'center',
                }}
              >
                Projets en Vedette
              </Title>
              <Text
                size="xl"
                style={{
                  color: 'var(--mantine-color-dimmed)',
                  maxWidth: '800px',
                  textAlign: 'center',
                }}
              >
                Découvrez quelques-uns de mes projets les plus récents et les plus significatifs.
              </Text>
            </Stack>
          </ScrollAnimation>

          <Box className={classes.projectsGrid}>
            {featuredProjects.map((project, index) => (
              <ScrollAnimation
                key={project.id}
                direction="up"
                delay={index * 0.2}
              >
                <Box className={classes.projectCard}>
                  <ScrollAnimation direction="right" delay={index * 0.2 + 0.1}>
                    <div className={classes.imageWrapper}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={classes.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </ScrollAnimation>
                  <Stack
                    p="md"
                    style={{
                      flex: 1,
                      backgroundColor: 'var(--mantine-color-body)',
                      borderBottomLeftRadius: 'var(--mantine-radius-md)',
                      borderBottomRightRadius: 'var(--mantine-radius-md)',
                      borderBottom: '1px solid var(--mantine-color-gray-5)',
                      paddingTop: '20px',
                    }}
                  >
                    <ScrollAnimation direction="left" delay={index * 0.2 + 0.2}>
                      <Title
                        order={3}
                        size="h3"
                        className={classes.title}
                      >
                        {project.title}
                      </Title>
                      <Text className={classes.description} c="dimmed" size="md">
                        {project.description}
                      </Text>
                      <Group justify="flex-end" mt="auto">
                        <Button
                          component={Link}
                          href={`/projects/${project.slug}`}
                          variant="light"
                          styles={{
                            root: {
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: 'var(--mantine-shadow-sm)',
                              },
                            },
                          }}
                        >
                          Voir le projet
                        </Button>
                      </Group>
                    </ScrollAnimation>
                  </Stack>
                </Box>
              </ScrollAnimation>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
