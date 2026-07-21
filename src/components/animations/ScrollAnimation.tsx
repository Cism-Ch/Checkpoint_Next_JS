/**
 * Composant d'animation au défilement utilisant Framer Motion
 * Permet d'animer des éléments lorsqu'ils entrent dans le viewport
 */
import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Interface définissant les propriétés du composant ScrollAnimation
 */
interface ScrollAnimationProps {
  children: ReactNode;      // Élément(s) à animer
  delay?: number;           // Délai avant le démarrage de l'animation (en secondes)
  direction?: 'up' | 'down' | 'left' | 'right';  // Direction de l'animation
  duration?: number;        // Durée de l'animation (en secondes)
  className?: string;       // Classes CSS additionnelles
  style?: React.CSSProperties; // Styles CSS inline
  once?: boolean;           // Si true, l'animation ne se déclenche qu'une seule fois
}

/**
 * Définition des variantes d'animation selon la direction
 * Chaque direction a un état caché (hidden) et un état visible
 */
const directionVariants = {
  up: {
    hidden: { opacity: 0, y: 50 },     // Élément invisible et décalé vers le bas
    visible: { opacity: 1, y: 0 },     // Élément visible à sa position normale
  },
  down: {
    hidden: { opacity: 0, y: -50 },    // Élément invisible et décalé vers le haut
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 50 },     // Élément invisible et décalé vers la droite
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -50 },    // Élément invisible et décalé vers la gauche
    visible: { opacity: 1, x: 0 },
  },
};

/**
 * Composant ScrollAnimation qui anime l'apparition d'éléments au défilement
 * @param children - Contenu à animer
 * @param delay - Délai avant le démarrage de l'animation (défaut: 0)
 * @param direction - Direction de l'animation (défaut: 'up')
 * @param duration - Durée de l'animation (défaut: 0.5s)
 * @param className - Classes CSS additionnelles
 * @param style - Styles CSS inline
 * @param once - Si l'animation doit se jouer une seule fois (défaut: true)
 */
export default function ScrollAnimation({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className,
  style,
  once = true,
}: ScrollAnimationProps) {
  // Référence à l'élément pour détecter quand il est visible
  const ref = useRef(null);

  // Hook Framer Motion qui vérifie si l'élément est visible dans le viewport
  // margin: -100px permet de déclencher l'animation un peu avant que l'élément soit complètement visible
  const isInView = useInView(ref, { once, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={directionVariants[direction]}  // Sélectionne les variantes d'animation selon la direction
      initial="hidden"                         // État initial: caché
      animate={isInView ? 'visible' : 'hidden'} // Animation basée sur la visibilité
      transition={{
        duration,                              // Durée de l'animation
        delay,                                 // Délai avant le démarrage
        ease: [0.43, 0.13, 0.23, 0.96],        // Courbe d'accélération (easing) pour une animation fluide
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
