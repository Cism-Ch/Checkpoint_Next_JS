/**
 * Projects List Page
 * Displays all projects with filtering and search capabilities
 * Features animated components and responsive grid layout
 */
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Stack, Text, Title } from '@mantine/core';
import ProjectFilters from '../../src/components/projects/ProjectFilters/ProjectFilters';
import ProjectGrid from '../../src/components/projects/ProjectGrid/ProjectGrid';
import { projects } from '../../src/data/projects';
import { ProjectCategory } from '../../src/types/project';

/**
 * Animated title component for the projects page
 * Provides fade-in and slide-up animation
 * @param props Component props including children and animation options
 */
const AnimatedTitle = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    <Title order={1} size="h1" mb="sm">
      {children}
    </Title>
  </motion.div>
);

/**
 * Animated text component for the page description
 * Provides delayed fade-in and slide-up animation
 * @param props Component props including children and animation options
 */
const AnimatedText = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    {...props}
  >
    <Text c="dimmed" size="lg" maw={600}>
      {children}
    </Text>
  </motion.div>
);

/**
 * ProjectsPage component
 * Features:
 * - Category-based filtering
 * - Text search functionality
 * - Animated page title and description
 * - Responsive project grid display
 *
 * Uses memoization for efficient filtering of projects
 * State management for category and search filters
 */
export default function ProjectsPage() {
  const [category, setCategory] = useState<ProjectCategory | 'all'>('all');
  const [search, setSearch] = useState('');

  /**
   * Memoized filtered projects based on category and search criteria
   * Prevents unnecessary recalculation on re-renders
   */
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === 'all' || project.category === category;
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <AnimatedTitle>Mes Projets</AnimatedTitle>
          <AnimatedText>
            Découvrez une sélection de mes projets les plus récents, démontrant mes compétences en
            développement web et mobile.
          </AnimatedText>
        </div>

        <ProjectFilters
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
        />

        <ProjectGrid projects={filteredProjects} />
      </Stack>
    </Container>
  );
}
