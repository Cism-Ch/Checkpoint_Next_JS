/**
 * Home Page Component
 * Main landing page of the portfolio showcasing various sections
 * Components are arranged in a vertical stack without gaps for seamless transitions
 */
import { Stack } from '@mantine/core';
import Contact from '../src/components/home/Contact/Contact';
import FeaturedProjects from '../src/components/home/FeaturedProjects/FeaturedProjects';
import Hero from '../src/components/home/Hero/Hero';
import Skills from '../src/components/home/Skills/Skills';
import Timeline from '../src/components/home/Timeline/Timeline';

/**
 * HomePage component renders the main landing page with five main sections:
 * 1. Hero - Introduction and main call-to-action
 * 2. Skills - Technical skills showcase
 * 3. FeaturedProjects - Highlighted portfolio projects
 * 4. Timeline - Professional experience timeline
 * 5. Contact - Contact form and information
 *
 * Uses Mantine Stack for vertical layout with no gaps
 * Each section handles its own internal spacing
 */
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
