/**
 * Layout principal de l'application
 * 
 * Ce fichier définit la structure de base de toutes les pages avec:
 * - En-tête (Header)
 * - Contenu principal animé
 * - Pied de page (Footer)
 * - Éléments d'accessibilité
 */

// Imports pour les types React et le routage Next.js
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
// Imports pour les animations de transition entre pages
import { AnimatePresence, motion } from 'framer-motion';
// Import de composant UI de Mantine
import { Container } from '@mantine/core';
// Imports des composants d'accessibilité
import Announcer from '../../common/A11y/Announcer';
import SkipToContent from '../../common/A11y/SkipToContent';
// Imports des composants structurels
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

/**
 * Interface définissant les propriétés du Layout
 * @property {ReactNode} children - Le contenu à afficher dans le layout
 */
interface LayoutProps {
  children: ReactNode;
}

/**
 * Configuration des animations de transition entre les pages
 * Définit les états initial, animé et de sortie
 */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },
};

/**
 * Configuration du timing et du type d'animation pour les transitions
 */
const pageTransition = {
  type: 'tween',
  ease: [0.43, 0.13, 0.23, 0.96], // Ease out cubic
  duration: 0.6,
};

/**
 * Composant Layout principal qui enveloppe toutes les pages
 * Gère les transitions animées entre les pages et fournit une structure cohérente
 */
export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Composants d'accessibilité */}
      <SkipToContent />
      <Announcer />
      
      {/* En-tête de la page */}
      <Header />
      
      {/* Système d'animation pour les transitions entre pages */}
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content" // Cible pour le composant SkipToContent
          tabIndex={-1} // Permet au main de recevoir le focus
          key={router.pathname} // Déclenche l'animation lors des changements de route
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          style={{
            position: 'relative',
            minHeight: '100vh',
            outline: 'none',
          }}
          role="main"
          aria-label="Contenu principal"
        >
          {/* Animation d'apparition du contenu de la page */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            <Container size="xl" py="xl">
              {children}
            </Container>
          </motion.div>

          {/* Animation de transition avec effet de rideau */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '100vh',
              background: 'var(--mantine-color-body)',
              transformOrigin: 'top',
              zIndex: 1,
            }}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          />
        </motion.main>
      </AnimatePresence>
      
      {/* Pied de page */}
      <Footer />
    </div>
  );
}
