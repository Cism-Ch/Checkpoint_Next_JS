/**
 * About Page Component
 * Provides detailed information about professional background and services
 * Layout structure follows a vertical stack with consistent spacing
 */
import { Container, Stack } from '@mantine/core';
import AboutHero from '../src/components/about/AboutHero/AboutHero';
import Services from '../src/components/about/Services/Services';
import Timeline from '../src/components/home/Timeline/Timeline';

/**
 * AboutPage component renders the About page with three main sections:
 * 1. AboutHero - Introduction and profile section
 * 2. Services - Overview of professional services offered
 * 3. Timeline - Professional experience timeline
 *
 * Uses Mantine Container and Stack for consistent layout and spacing
 * - Container size="xl" for wider content area
 * - Stack with 50px gaps for vertical section spacing
 */
export default function AboutPage() {
  return (
    <Container size="xl" py={50}>
      <Stack gap={50}>
        <AboutHero />
        <Services />
        <Timeline />
      </Stack>
    </Container>
  );
}
