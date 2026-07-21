/**
 * ProjectGallery Component
 *
 * Affiche une galerie d'images interactive avec:
 * - Carousel responsive pour la navigation
 * - Lightbox modal pour l'affichage en plein écran
 * - Animations fluides à l'apparition des images
 * - Navigation par miniatures dans le modal
 */

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Carousel } from '@mantine/carousel';
import { Group, Modal, Paper, Text, UnstyledButton } from '@mantine/core';

/**
 * Interface des props du composant ProjectGallery
 * @interface ProjectGalleryProps
 * @property {Object[]} images - Tableau des images à afficher
 * @property {string} images[].url - URL de l'image
 * @property {string} [images[].caption] - Légende optionnelle de l'image
 */
interface ProjectGalleryProps {
  images: {
    url: string;
    caption?: string;
  }[];
}

/**
 * Composant AnimatedPaper
 * Wrapper animé pour les images de la galerie
 *
 * Caractéristiques:
 * - Animation de fade-in et scale à l'apparition
 * - Effet de survol avec curseur pointer
 * - Support de la propagation des props
 *
 * @param {Object} props - Props du composant
 * @param {React.ReactNode} props.children - Contenu à animer
 */
const AnimatedPaper = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}  // État initial invisible et légèrement réduit
    animate={{ opacity: 1, scale: 1 }}     // Animation vers opacité totale et taille normale
    transition={{ duration: 0.5 }}         // Durée de l'animation
    {...props}
  >
    <Paper shadow="md" radius="md" style={{ cursor: 'pointer' }}>
      {children}
    </Paper>
  </motion.div>
);

/**
 * Composant ProjectGallery
 * Gère l'affichage et l'interaction avec la galerie d'images
 *
 * Fonctionnalités:
 * - Affichage des images en carousel
 * - Ouverture en lightbox au clic
 * - Navigation entre les images
 * - Affichage des légendes
 *
 * @param {ProjectGalleryProps} props - Props du composant
 * @returns {JSX.Element | null} Galerie d'images ou null si pas d'images
 */
export default function ProjectGallery({ images }: ProjectGalleryProps) {
  // États pour gérer le modal et l'image active
  const [opened, setOpened] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  // Protection contre les tableaux vides
  if (!images || images.length === 0) {
    return null;
  }

  /**
   * Gère l'ouverture du lightbox
   * @param {number} index - Index de l'image à afficher
   */
  const openLightbox = (index: number) => {
    setActiveImage(index);
    setOpened(true);
  };

  return (
    <>
      <Carousel
        slideSize={{ base: '100%', sm: '50%', lg: '33.333333%' }}
        slideGap="md"
        align="start"
        slidesToScroll={1}
      >
        {images.map((image, index) => (
          <Carousel.Slide key={index}>
            <AnimatedPaper onClick={() => openLightbox(index)} transition={{ delay: index * 0.1 }}>
              <Image
                src={image.url}
                alt={image.caption || `Image ${index + 1}`}
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: 'inherit',
                }}
              />
              {image.caption && (
                <Text size="sm" c="dimmed" ta="center" p="xs">
                  {image.caption}
                </Text>
              )}
            </AnimatedPaper>
          </Carousel.Slide>
        ))}
      </Carousel>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="xl"
        padding="xs"
        centered
        withCloseButton={false}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <div style={{ position: 'relative' }}>
          <Image
            src={images[activeImage].url}
            alt={images[activeImage].caption || `Image ${activeImage + 1}`}
            width={1200}
            height={800}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
          {images[activeImage].caption && (
            <Text
              size="sm"
              c="dimmed"
              ta="center"
              p="xs"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(0,0,0,0.7)',
                color: 'white',
              }}
            >
              {images[activeImage].caption}
            </Text>
          )}
        </div>
        <Group justify="center" gap="xs" p="xs">
          {images.map((_, index) => (
            <UnstyledButton
              key={index}
              onClick={() => setActiveImage(index)}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: `2px solid ${index === activeImage ? 'var(--mantine-color-blue-6)' : 'transparent'}`,
                overflow: 'hidden',
              }}
            >
              <Image
                src={images[index].url}
                alt={`Thumbnail ${index + 1}`}
                width={40}
                height={40}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </UnstyledButton>
          ))}
        </Group>
      </Modal>
    </>
  );
}
