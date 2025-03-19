import { Container, Divider, Stack } from '@mantine/core';
import AboutHero from '../src/components/about/AboutHero/AboutHero';
import Services from '../src/components/about/Services/Services';
import Timeline from '../src/components/home/Timeline/Timeline';

export default function AboutPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap={0}>
        <AboutHero />
        <Divider my="xl" />
        <Services />
        <Divider my="xl" />
        <Timeline />
      </Stack>
    </Container>
  );
}
