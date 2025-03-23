import { Avatar } from '@mantine/core';
import Image from 'next/image';
import classes from './ProfileAvatar.module.css';

interface ProfileAvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  withBorder?: boolean;
  src?: string;
  alt?: string;
}

export function ProfileAvatar({
  size = 'lg',
  withBorder = true,
  src = 'https://i.pinimg.com/736x/a5/87/a6/a587a67e8b01d87db5e074daafdd81d9.jpg',
  alt = 'Photo de profil'
}: ProfileAvatarProps) {
  const sizeInPx = {
    xs: 30,
    sm: 36,
    md: 42,
    lg: 48,
    xl: 56
  }[size];

  return (
    <div 
      className={`${classes.avatarWrapper} ${withBorder ? classes.withBorder : ''}`}
      style={{ '--avatar-size': `${sizeInPx}px` } as React.CSSProperties}
    >
      <Avatar
        component="div"
        size={size}
        className={classes.avatar}
        styles={{
          root: {
            overflow: 'hidden',
          },
        }}
      >
        <div className={classes.imageWrapper}>
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
