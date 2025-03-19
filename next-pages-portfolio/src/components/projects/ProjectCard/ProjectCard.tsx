import Link from 'next/link';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { Project } from '../../../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
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

      <Text size="sm" c="dimmed" mb="md" lineClamp={2} style={{ flex: 1 }}>
        {project.description}
      </Text>

      <div>
        <Group gap={7} mb="md">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="light" size="sm">
              {tech}
            </Badge>
          ))}
        </Group>

        <Group gap="xs">
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
