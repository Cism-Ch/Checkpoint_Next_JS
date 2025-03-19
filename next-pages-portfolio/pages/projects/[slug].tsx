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

interface ProjectDetailProps {
  project: Project;
}

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

        {project.screenshots && project.screenshots.length > 0 && (
          <>
            <Divider my="xl" />
            <div>
              <AnimatedTitle>Captures d'écran</AnimatedTitle>
              <Grid gutter="md">
                {project.screenshots.map((screenshot, index) => (
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

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
