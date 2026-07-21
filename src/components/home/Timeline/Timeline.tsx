/**
 * Timeline.tsx
 * 
 * Composant qui affiche un parcours professionnel et éducatif sous forme chronologique.
 * Utilise des animations au défilement pour améliorer l'expérience utilisateur,
 * et présente les informations de façon structurée avec des icônes distinctives.
 */

import { IconBriefcase, IconCertificate, IconSchool } from '@tabler/icons-react';
import { Timeline as MantineTimeline, Text, Title, Container, Stack } from '@mantine/core';
import ScrollAnimation from '../../animations/ScrollAnimation';

/**
 * Données de la timeline - parcours professionnel et formation
 * Chaque objet représente une étape avec titre, organisation, période, description et icône
 */
const timelineData = [
  {
    title: 'Développeur Full Stack Senior',
    company: 'Entreprise Tech',
    period: '2022 - Présent',
    description:
      "Développement d'applications web complexes avec React et Node.js. Lead technique sur plusieurs projets majeurs.",
    icon: IconBriefcase,  // Icône de travail pour les expériences professionnelles
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
    icon: IconSchool,  // Icône d'école pour les formations
  },
  {
    title: 'Certifications',
    company: 'Diverses plateformes',
    period: '2019',
    description: 'AWS Certified Developer, MongoDB University, React Certification',
    icon: IconCertificate,  // Icône de certificat pour les certifications
  },
];

/**
 * Composant principal de la timeline
 * Affiche un titre, une description et la chronologie des étapes professionnelles
 */
export default function Timeline() {
  return (
    <Container size="lg" py={80}>
      {/* En-tête de section avec animation */}
      <ScrollAnimation direction="up" delay={0.2}>
        <Stack align="center" mb={60} gap="md">
          {/* Titre avec effet de dégradé */}
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
          {/* Sous-titre explicatif */}
          <Text size="lg" ta="center" c="dimmed" maw={600} mx="auto">
            Découvrez mon parcours professionnel et mes formations
          </Text>
        </Stack>
      </ScrollAnimation>

      {/* Composant Timeline principal avec animation */}
      <ScrollAnimation direction="up" delay={0.3}>
        <MantineTimeline
          active={1}  // Élément actuellement actif (position dans la timeline)
          bulletSize={46}  // Taille des puces/icônes
          lineWidth={4}    // Épaisseur de la ligne
          color="brand"    // Couleur de marque pour la ligne et les puces
          radius="xl"      // Coins arrondis
        >
          {/* Génération des éléments de la timeline depuis les données */}
          {timelineData.map((item, index) => (
            <MantineTimeline.Item
              key={index}
              bullet={<item.icon size={30} />}  // Utilisation de l'icône dynamique
              title={<Text size="xl" fw={800} mb="md">{item.title}</Text>}
            >
              {/* Animation pour chaque élément de la timeline */}
              <ScrollAnimation direction="left" delay={index * 0.2}>
                <Stack gap="xs">
                  {/* Informations sur l'entreprise/institution et la période */}
                  <Text size="lg" fw={600} c="brand">
                    {item.company} • {item.period}
                  </Text>
                  {/* Description détaillée */}
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
