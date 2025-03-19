import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Box, Group, List, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { fadeInUp, slideIn } from '../../../utils/animations';

const AnimatedStack = ({ children, ...props }: any) => (
  <motion.div variants={slideIn} initial="initial" animate="animate" {...props}>
    <Stack gap="xl">{children}</Stack>
  </motion.div>
);

const AnimatedBox = ({ children, ...props }: any) => (
  <motion.div variants={fadeInUp} initial="initial" animate="animate" {...props}>
    <Box>{children}</Box>
  </motion.div>
);

const highlights = [
  "5+ années d'expérience en développement web",
  'Spécialiste React et Next.js',
  'Expert en architecture front-end',
  "Passionné par l'UX/UI",
  'Adepte des bonnes pratiques de développement',
];

export default function AboutHero() {
  return (
    <Box
      py={50}
      style={{
        backgroundColor: 'var(--mantine-color-body)',
      }}
    >
      <Group align="center" justify="space-between" gap={50}>
        <AnimatedStack maw={600}>
          <motion.div variants={fadeInUp}>
            <Title
              order={1}
              size={50}
              style={{
                color: 'var(--mantine-color-text)',
                backgroundImage:
                  'linear-gradient(45deg, var(--mantine-color-blue-filled), var(--mantine-color-cyan-filled))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              À Propos de Moi
            </Title>
            <Text
              size="xl"
              mt="xl"
              style={{
                color: 'var(--mantine-color-text)',
              }}
            >
              Développeur passionné par la création d'expériences web exceptionnelles. Je combine
              créativité et expertise technique pour donner vie à des projets innovants.
            </Text>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <List
              spacing="sm"
              size="lg"
              center
              icon={
                <ThemeIcon
                  color="blue"
                  size={24}
                  radius="xl"
                  style={{
                    backgroundColor: 'var(--mantine-color-blue-filled)',
                    color: 'var(--mantine-color-white)',
                  }}
                >
                  <IconCheck size="1rem" />
                </ThemeIcon>
              }
              styles={{
                item: {
                  color: 'var(--mantine-color-text)',
                },
              }}
            >
              {highlights.map((highlight, index) => (
                <List.Item key={index}>{highlight}</List.Item>
              ))}
            </List>
          </motion.div>
        </AnimatedStack>

        <AnimatedBox
          pos="relative"
          w={{ base: 300, sm: 350, md: 400 }}
          h={{ base: 375, sm: 437, md: 500 }}
          style={{
            boxShadow: 'var(--mantine-shadow-md)',
            borderRadius: 'var(--mantine-radius-md)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="https://i.pinimg.com/1200x/85/12/16/85121663b1953c040549f99d4105c4a1.jpg"
            alt="Photo professionnelle"
            width={400}
            height={500}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </AnimatedBox>
      </Group>
    </Box>
  );
}
