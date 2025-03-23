import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';
import { Box, Group, List, Stack, Text, ThemeIcon, Title, rem } from '@mantine/core';
import ScrollAnimation from '../../animations/ScrollAnimation';


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
      py={80}
      px={80}
      bg="light-dark(var(--mantine-color-gray-1),var(--mantine-color-dark-9))"
      style={{
        borderRadius: rem(20),
        backdropFilter: 'blur(25px)',
      }}
    >
      <Group align="center" justify="space-between" gap={50}>
        <Stack maw={600}>
          <ScrollAnimation direction="up">
            <Title
              order={1}
              size={50}
              style={{
                color: 'var(--mantine-color-text)',
                backgroundImage:
                  'linear-gradient(45deg, var(--mantine-color-pink-filled), var(--mantine-color-orange-filled))',
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
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
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
          </ScrollAnimation>
        </Stack>

        <ScrollAnimation direction="right" delay={0.2}>
          <Box
            pos="relative"
            w={{ base: 300, sm: 350, md: 400 }}
            h={{ base: 375, sm: 437, md: 500 }}
            style={{
              root: {
                boxShadow: 'var(--mantine-shadow-md)',
                borderRadius: 'var(--mantine-radius-md)',
                overflow: 'hidden',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 'var(--mantine-shadow-lg)',
                },
              },
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
          </Box>
        </ScrollAnimation>
      </Group>
    </Box>
  );
}
