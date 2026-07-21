/**
 * Contact Page Component
 * Provides a dedicated contact form and information section
 * Uses the shared Contact component from the home page
 */
import { Container } from '@mantine/core';
import Contact from '../src/components/home/Contact/Contact';
import SEO from '../src/components/seo/SEO';

/**
 * ContactPage component renders the contact page with:
 * - SEO optimization for contact page
 * - Contact form component in a contained layout
 * - Reuses the Contact component from home page for consistency
 *
 * Uses Mantine Container for consistent layout width
 * @returns Contact page with form and information
 */
export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact - Votre Nom"
        description="Contactez-moi pour discuter de vos projets ou pour toute autre question."
      />
      <Container size="lg">
        <Contact />
      </Container>
    </>
  );
} 