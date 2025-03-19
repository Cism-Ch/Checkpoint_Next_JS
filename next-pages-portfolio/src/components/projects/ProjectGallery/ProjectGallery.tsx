import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Carousel } from '@mantine/carousel';
import { Group, Modal, Paper, Text, UnstyledButton } from '@mantine/core';

interface ProjectGalleryProps {
  images: {
    url: string;
    caption?: string;
  }[];
}

const AnimatedPaper = ({ children, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    <Paper shadow="md" radius="md" style={{ cursor: 'pointer' }}>
      {children}
    </Paper>
  </motion.div>
);

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [opened, setOpened] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

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
