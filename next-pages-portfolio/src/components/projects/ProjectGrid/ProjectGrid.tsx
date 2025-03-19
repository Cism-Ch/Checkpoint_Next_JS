import { AnimatePresence, motion } from 'framer-motion';
import { SimpleGrid } from '@mantine/core';
import { Project } from '../../../types/project';
import ProjectCard from '../ProjectCard/ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3 },
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInUp}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </SimpleGrid>
  );
}
