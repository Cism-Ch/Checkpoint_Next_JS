/**
 * ProjectGrid Component
 *
 * Affiche une grille responsive de projets avec des animations fluides
 * lors de l'ajout, du retrait ou du filtrage des projets.
 *
 * Caractéristiques:
 * - Mise en page responsive avec SimpleGrid de Mantine
 * - Animations de transition avec Framer Motion
 * - Gestion des entrées/sorties d'éléments avec AnimatePresence
 */

import { AnimatePresence, motion } from 'framer-motion';
import { SimpleGrid } from '@mantine/core';
import { Project } from '../../../types/project';
import ProjectCard from '../ProjectCard/ProjectCard';

/**
 * Interface des props du composant ProjectGrid
 * @interface ProjectGridProps
 * @property {Project[]} projects - Tableau des projets à afficher
 */
interface ProjectGridProps {
  projects: Project[];
}

/**
 * Configuration de l'animation fadeInUp
 *
 * @property {Object} initial - État initial de l'animation (invisible et décalé vers le bas)
 * @property {Object} animate - État final de l'animation (visible et position normale)
 * @property {Object} exit - État de sortie (disparition avec mouvement vers le bas)
 * @property {Object} transition - Configuration de la durée de transition
 */
const fadeInUp = {
  initial: { opacity: 0, y: 20 }, // Commence invisible et 20px plus bas
  animate: { opacity: 1, y: 0 },  // Anime vers opacité complète et position normale
  exit: { opacity: 0, y: 20 },    // Sort avec un fondu et mouvement vers le bas
  transition: { duration: 0.3 },   // Durée de 0.3s pour une animation fluide
};

/**
 * Composant ProjectGrid
 * Affiche une grille de projets avec des animations de transition
 *
 * @param {ProjectGridProps} props - Les props du composant
 * @returns {JSX.Element} Grille responsive de cartes de projets animées
 */
export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
      {/* AnimatePresence gère les animations d'entrée/sortie des éléments */}
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          /* Conteneur animé pour chaque projet */
          <motion.div
            key={project.id}
            layout                  // Active le layout automatique
            initial="initial"       // État initial défini dans fadeInUp
            animate="animate"       // Animation vers l'état final
            exit="exit"            // Animation de sortie
            variants={fadeInUp}     // Utilise la configuration fadeInUp
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </SimpleGrid>
  );
}
