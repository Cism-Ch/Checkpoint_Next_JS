/**
 * ProjectCard Component
 *
 * Affiche un projet dans une carte interactive avec image, description et liens
 *
 * Caractéristiques:
 * - Affichage responsive avec flexbox
 * - Image du projet avec titre
 * - Badge pour la catégorie
 * - Description tronquée à 2 lignes
 * - Liste des technologies utilisées
 * - Liens conditionnels (démo, GitHub, détails)
 */

import Link from 'next/link';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { Project } from '../../../types/project';

/**
 * Interface des props du composant ProjectCard
 * @interface ProjectCardProps
 * @property {Project} project - Objet contenant les données du projet à afficher
 *   - title: Titre du projet
 *   - slug: URL slug pour la navigation
 *   - image: URL de l'image du projet
 *   - description: Description du projet
 *   - category: Catégorie du projet
 *   - technologies: Liste des technologies utilisées
 *   - demoUrl: URL optionnelle de la démo
 *   - githubUrl: URL optionnelle du code source
 */
interface ProjectCardProps {
  project: Project;
}

/**
 * Composant ProjectCard
 * Affiche les informations d'un projet dans une carte interactive
 *
 * @param {ProjectCardProps} props - Les props du composant
 * @returns {JSX.Element} Carte de projet avec image, description et liens
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    /* Card conteneur principal avec layout flex pour une hauteur égale */
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Card.Section>
        <Image src={project.image} height={200} alt={project.title} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text
          fw={500}
          size="lg"
          component={Link}
          href={`/projects/${project.slug}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {project.title}
        </Text>
        <Badge variant="light" color="blue">
          {project.category}
        </Badge>
      </Group>
{/* Description du projet avec limitation à 2 lignes et flex-grow pour maintenir une hauteur égale */}
<Text size="sm" c="dimmed" mb="md" lineClamp={2} style={{ flex: 1 }}>
  {project.description}
</Text>


      {/* Section des technologies et actions */}
      <div>
        {/* Liste des technologies utilisées dans le projet */}
        <Group gap={7} mb="md">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="light" size="sm">
              {tech}
            </Badge>
          ))}
        </Group>

        {/* Groupe de boutons avec rendu conditionnel */}
        <Group gap="xs">
          {/* Bouton Demo - affiché uniquement si demoUrl existe */}
          {project.demoUrl && (
            <Button
              component="a"
              href={project.demoUrl}
              target="_blank"
              variant="light"
              leftSection={<IconExternalLink size={16} />}
              size="xs"
            >
              Demo
            </Button>
          )}
          {/* Bouton GitHub - affiché uniquement si githubUrl existe */}
          {project.githubUrl && (
            <Button
              component="a"
              href={project.githubUrl}
              target="_blank"
              variant="subtle"
              leftSection={<IconBrandGithub size={16} />}
              size="xs"
            >
              Code
            </Button>
          )}
          <Button
            component={Link}
            href={`/projects/${project.slug}`}
            variant="subtle"
            size="xs"
            ml="auto"
          >
            En savoir plus
          </Button>
        </Group>
      </div>
    </Card>
  );
}
