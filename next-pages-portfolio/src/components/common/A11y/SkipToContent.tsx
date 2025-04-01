// Import du composant Button de Mantine UI
import { Button } from '@mantine/core';
// Import des styles CSS spécifiques au composant
import classes from './SkipToContent.module.css';

/**
 * Composant SkipToContent - Élément d'accessibilité (a11y) permettant aux utilisateurs
 * de sauter directement au contenu principal de la page
 * 
 * Particulièrement utile pour:
 * - Les utilisateurs de lecteurs d'écran
 * - Les personnes naviguant au clavier
 * - L'amélioration générale de l'expérience utilisateur
 */
export default function SkipToContent() {
  return (
    <Button
      // Utilise un lien (a) comme élément sous-jacent
      component="a"
      // Pointe vers l'ancre #main-content qui doit exister dans la page
      href="#main-content"
      // Appliquer les styles spécifiques (généralement caché visuellement jusqu'à ce qu'il reçoive le focus)
      className={classes.skipLink}
      // Gestionnaire d'événements pour garantir le focus sur le contenu principal
      onClick={(e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        // Focus programmatique sur l'élément avec l'ID "main-content"
        document.getElementById('main-content')?.focus();
      }}
    >
      Aller au contenu principal
    </Button>
  );
}
