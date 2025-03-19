import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '@mantine/core';
import Announcer from '../../common/A11y/Announcer';
import SkipToContent from '../../common/A11y/SkipToContent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface LayoutProps {
  children: ReactNode;
}

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

const pageTransition = {
  type: 'tween',
  ease: [0.43, 0.13, 0.23, 0.96], // Ease out cubic
  duration: 0.6,
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div style={{ overflow: 'hidden' }}>
      <SkipToContent />
      <Announcer />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          tabIndex={-1}
          key={router.pathname}
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
      <Footer />
    </div>
  );
}
