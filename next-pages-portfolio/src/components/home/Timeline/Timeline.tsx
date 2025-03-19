import { IconBriefcase, IconCertificate, IconSchool } from '@tabler/icons-react';
import { Timeline as MantineTimeline, Text, Title, Container, Stack } from '@mantine/core';
import ScrollAnimation from '../../animations/ScrollAnimation';

const timelineData = [
  {
    title: 'Développeur Full Stack Senior',
    company: 'Entreprise Tech',
    period: '2022 - Présent',
    description:
      "Développement d'applications web complexes avec React et Node.js. Lead technique sur plusieurs projets majeurs.",
    icon: IconBriefcase,
  },
  {
    title: 'Développeur Front-end',
    company: 'Startup Innovante',
    period: '2020 - 2022',
    description:
      "Création d'interfaces utilisateur modernes et responsive. Mise en place de bonnes pratiques de développement.",
    icon: IconBriefcase,
  },
  {
    title: 'Formation Développeur Web',
    company: 'École de Développement',
    period: '2019 - 2020',
    description:
      'Formation intensive en développement web full stack. Spécialisation en JavaScript moderne.',
    icon: IconSchool,
  },
  {
    title: 'Certifications',
    company: 'Diverses plateformes',
    period: '2019',
    description: 'AWS Certified Developer, MongoDB University, React Certification',
    icon: IconCertificate,
  },
];

export default function Timeline() {
  return (
    <Container size="lg" py={80}>
      <ScrollAnimation direction="up" delay={0.2}>
        <Stack align="center" mb={60} gap="md">
          <Title order={2} ta="center" mb={20} size="h1" style={{
            color: 'var(--mantine-color-text)',
            backgroundImage:
              'linear-gradient(45deg, var(--mantine-color-pink-filled), var(--mantine-color-orange-filled))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Mon Parcours
          </Title>
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            Découvrez mon parcours professionnel et mes formations
          </Text>
        </Stack>
      </ScrollAnimation>

      <ScrollAnimation direction="up" delay={0.3}>
        <MantineTimeline
          active={1}
          bulletSize={46}
          lineWidth={4}
          color="brand"
          radius="xl"
        >
          {timelineData.map((item, index) => (
            <MantineTimeline.Item
              key={index}
              bullet={<item.icon size={30} />}
              title={<Text size="xl" fw={800} mb="md">{item.title}</Text>}
            >
              <ScrollAnimation direction="left" delay={index * 0.2}>
                <Stack gap="xs">
                  <Text size="lg" fw={600} c="brand">
                    {item.company} • {item.period}
                  </Text>
                  <Text size="md" lh={1.6}>
                    {item.description}
                  </Text>
                </Stack>
              </ScrollAnimation>
            </MantineTimeline.Item>
          ))}
        </MantineTimeline>
      </ScrollAnimation>
    </Container>
  );
}
