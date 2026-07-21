// Imports des composants Mantine et Next.js nécessaires
import { Avatar } from '@mantine/core';
import Image from 'next/image';
// Import des styles CSS modules pour le composant
import classes from './ProfileAvatar.module.css';

/**
 * Interface définissant les props acceptées par le composant ProfileAvatar
 * @property {string} size - Taille prédéfinie de l'avatar (xs, sm, md, lg, xl)
 * @property {boolean} withBorder - Détermine si l'avatar doit avoir une bordure colorée
 * @property {string} src - URL de l'image de profil
 * @property {string} alt - Texte alternatif pour l'image (accessibilité)
 */
interface ProfileAvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  withBorder?: boolean;
  src?: string;
  alt?: string;
}

/**
 * Composant ProfileAvatar - Affiche une photo de profil avec bordure optionnelle
 * Compatible avec le système de design Mantine et optimisé avec Next.js Image
 */
export function ProfileAvatar({
  size = 'lg',
  withBorder = true,
  src = 'https://i.pinimg.com/736x/a5/87/a6/a587a67e8b01d87db5e074daafdd81d9.jpg',
  alt = 'Photo de profil'
}: ProfileAvatarProps) {
  // Conversion des tailles nommées en pixels pour Next.js Image et CSS variables
  const sizeInPx = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 48,
    xl: 56
  }[size];

  return (
    <div 
      // Application conditionnelle des classes pour le wrapper et la bordure
      className={`${classes.avatarWrapper} ${withBorder ? classes.withBorder : ''}`}
      // Définition de la variable CSS utilisée dans le module CSS pour les dimensions
      style={{ '--avatar-size': `${sizeInPx}px` } as React.CSSProperties}
    >
      {/* Utilisation du composant Avatar de Mantine comme conteneur */}
      <Avatar
        component="div"
        size={size}
        className={classes.avatar}
        styles={{
          root: {
            overflow: 'hidden', // Assure que l'image ne déborde pas
          },
        }}
      >
        {/* Conteneur pour l'image optimisée de Next.js */}
        <div className={classes.imageWrapper}>
          {/* Composant Image de Next.js pour optimisation automatique */}
          <Image
            src={src}
            alt={alt}
            width={sizeInPx}
            height={sizeInPx}
            className={classes.image}
          />
        </div>
      </Avatar>
    </div>
  );
}
