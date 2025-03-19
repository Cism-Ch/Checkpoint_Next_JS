import { Stack } from '@mantine/core';
import Contact from '../src/components/home/Contact/Contact';
import FeaturedProjects from '../src/components/home/FeaturedProjects/FeaturedProjects';
import Hero from '../src/components/home/Hero/Hero';
import Skills from '../src/components/home/Skills/Skills';
import Timeline from '../src/components/home/Timeline/Timeline';

export default function HomePage() {
  return (
    <Stack gap={0}>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Timeline />
      <Contact />
    </Stack>
  );
}
