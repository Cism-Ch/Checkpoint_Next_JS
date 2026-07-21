/**
 * Project Detail Page
 * Displays detailed information about a specific project
 * Uses static site generation for improved performance
 */
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowLeft, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
  Badge,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ProjectGallery from '../../src/components/projects/ProjectGallery/ProjectGallery';
import { projects } from '../../src/data/projects';
import { Project } from '../../src/types/project';

/**
 * Animated title component with fade-in and slide-up animation
 * Used for section headers in the project detail page
 * @param {any} props Component props including children for title content
 */
const AnimatedTitle = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    <Title order={2} size="h3" mb="lg">
      {children}
    </Title>
  </motion.div>
);

/**
 * Animated text component with delayed fade-in
 * Used for project descriptions and details
 * @param {any} props Component props including children for text content
 */
const AnimatedText = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    {...props}
  >
    <Text size="lg">{children}</Text>
  </motion.div>
);

/**
 * Animated paper component with scale and fade animation
 * Used for project screenshots and gallery items
 * @param {any} props Component props including children for paper content
 */
const AnimatedPaper = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    <Paper shadow="md" radius="md">
      {children}
    </Paper>
  </motion.div>
);

/**
 * Props interface for the ProjectDetail component
 */
interface ProjectDetailProps {
  project: Project;  // Project data fetched during static generation
}

/**
 * ProjectDetail component displays comprehensive project information:
 * - Title and technologies used
 * - Project description
 * - Links to GitHub and demo
 * - Screenshot gallery (if available)
 * - Project gallery (if available)
 *
 * Features:
 * - Animated content sections
 * - Responsive image grid
 * - Navigation back to projects list
 *
 * @param {ProjectDetailProps} props Project data from static generation
 */
export default function ProjectDetail({ project }: ProjectDetailProps) {
  if (!project) {
    return null;
  }

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Button
            component={Link}
            href="/projects"
            variant="subtle"
            leftSection={<IconArrowLeft size={16} />}
            mb="xl"
          >
            Retour aux projets
          </Button>

          <AnimatedTitle>{project.title}</AnimatedTitle>

          <Group gap="xs" mb="xl">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="light" color="blue">
                {tech}
              </Badge>
            ))}
          </Group>

          <AnimatedText mb="xl">{project.description}</AnimatedText>

          <Group gap="md" mb="xl">
            {project.githubUrl && (
              <Button
                component="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftSection={<IconBrandGithub size={16} />}
              >
                Voir le code
              </Button>
            )}
            {project.demoUrl && (
              <Button
                component="a"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftSection={<IconExternalLink size={16} />}
              >
                Voir la démo
              </Button>
            )}
          </Group>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <>
            <Divider my="xl" />
            <div>
              <AnimatedTitle>Captures d'écran</AnimatedTitle>
              <Grid gutter="md">
                {project.gallery.map((screenshot, index) => (
                  <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
                    <AnimatedPaper>
                      <Image
                        src={screenshot.url}
                        alt={screenshot.caption || `Capture d'écran ${index + 1}`}
                        width={600}
                        height={400}
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: 'inherit',
                        }}
                      />
                      {screenshot.caption && (
                        <Text size="sm" c="dimmed" ta="center" p="xs">
                          {screenshot.caption}
                        </Text>
                      )}
                    </AnimatedPaper>
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          </>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <>
            <Divider my="xl" />
            <div>
              <AnimatedTitle>Galerie du projet</AnimatedTitle>
              <ProjectGallery images={project.gallery} />
            </div>
          </>
        )}
      </Stack>
    </Container>
  );
}

/**
 * Generates static paths for all projects
 * Creates a route for each project using its slug
 * @returns {GetStaticPaths} Paths configuration for Next.js static generation
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

/**
 * Fetches static props for a specific project
 * Finds project data based on the URL slug parameter
 * Returns 404 if project is not found
 * @param {GetStaticProps} context Next.js static generation context
 * @returns {GetStaticProps} Props for the ProjectDetail component
 */
export const getStaticProps: GetStaticProps<ProjectDetailProps> = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};
