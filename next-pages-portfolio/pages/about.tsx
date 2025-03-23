import { Container, Stack } from '@mantine/core';
import AboutHero from '../src/components/about/AboutHero/AboutHero';
import Services from '../src/components/about/Services/Services';
import Timeline from '../src/components/home/Timeline/Timeline';

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
