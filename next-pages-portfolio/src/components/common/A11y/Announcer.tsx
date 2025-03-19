import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
