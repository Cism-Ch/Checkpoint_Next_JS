/**
 * FeaturedProjects.tsx
 * 
 * Composant qui affiche une sélection de projets importants sur la page d'accueil.
 * Ces projets sont filtrés à partir de la liste complète (marqués comme "featured")
 * et présentés avec des animations au défilement pour une meilleure expérience utilisateur.
 */

import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Group, Stack, Text, Title } from '@mantine/core';
import ScrollAnimation from '../../animations/ScrollAnimation';
import { projects } from '../../../data/projects';
import classes from './FeaturedProjects.module.css';

// Filtre les projets mis en avant (propriété featured=true) et limite à maximum 3 projets
const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3); // Limite à 3 projets

/**
 * Composant principal pour la section des projets en vedette
 * Utilise les animations de défilement et affiche les projets dans une grille responsive
 */
export default function FeaturedProjects() {
  return (
    <Box className={classes.container}>
      {/* Container principal avec fond stylisé (voir CSS) */}
      <Box className={classes.inner}>
        <Stack gap="xl">
          {/* Section titre avec animation au défilement */}
          <ScrollAnimation direction="up">
            <Stack gap="xl" align="center">
              {/* Titre principal avec dégradé de couleurs */}
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
              {/* Sous-titre explicatif */}
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

          {/* Grille de projets - layout responsive défini dans le CSS */}
          <Box className={classes.projectsGrid}>
            {/* Mapping des projets filtrés avec animations séquentielles */}
            {featuredProjects.map((project, index) => (
              <ScrollAnimation
                key={project.id}
                direction="up"
                delay={index * 0.2} // Délai progressif basé sur l'index pour effet cascade
              >
                {/* Carte de projet avec effet de survol */}
                <Box className={classes.projectCard}>
                  {/* Animation de l'image venant de la droite */}
                  <ScrollAnimation direction="right" delay={index * 0.2 + 0.1}>
                    <div className={classes.imageWrapper}>
                      {/* Image du projet avec Next.js Image pour optimisation */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={classes.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </ScrollAnimation>
                  {/* Contenu textuel de la carte */}
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
                    {/* Animation du contenu venant de la gauche */}
                    <ScrollAnimation direction="left" delay={index * 0.2 + 0.2}>
                      {/* Titre du projet */}
                      <Title
                        order={3}
                        size="h3"
                        className={classes.title}
                      >
                        {project.title}
                      </Title>
                      {/* Description courte du projet */}
                      <Text className={classes.description} c="dimmed" size="md">
                        {project.description}
                      </Text>
                      {/* Bouton d'action placé en bas à droite */}
                      <Group justify="flex-end" mt="auto">
                        <Button
                          component={Link}
                          href={`/projects/${project.slug}`}
                          variant="light"
                          styles={{
                            root: {
                              '&:hover': {
                                transform: 'translateY(-2px)', // Effet de lévitation au survol
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
