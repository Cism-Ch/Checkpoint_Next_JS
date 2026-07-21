import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/**
 * @component Announcer
 * @description Composant d'accessibilité qui annonce les changements de page aux technologies d'assistance.
 * Ce composant utilise les attributs ARIA pour communiquer de manière non-visuelle les transitions de navigation,
 * améliorant ainsi l'expérience des utilisateurs de lecteurs d'écran.
 *
 * @integration
 * - S'intègre avec Next.js via le hook `useRouter` pour détecter les changements de route
 * - Utilise les événements de routage de Next.js pour déclencher les annonces
 *
 * @accessibility
 * Attributs ARIA utilisés :
 * - `role="status"` : Indique que c'est une région qui communique des mises à jour importantes
 * - `aria-live="polite"` : Les mises à jour sont annoncées sans interrompre l'utilisateur
 * - `aria-atomic="true"` : Le contenu entier est lu à chaque mise à jour
 *
 * @example
 * ```tsx
 * // Dans _app.tsx ou un layout principal
 * export default function Layout({ children }) {
 *   return (
 *     <>
 *       <Announcer />
 *       {children}
 *     </>
 *   );
 * }
 * ```
 */
export default function Announcer() {
  const [announcement, setAnnouncement] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Annoncer les changements de page
    const handleRouteChange = (url: string) => {
      const path = url.split('/').pop() || 'accueil';
      const pageName = path.charAt(0).toUpperCase() + path.slice(1);
      setAnnouncement(`Navigation vers la page ${pageName}`);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0',
      }}
    >
      {announcement}
    </div>
  );
}
