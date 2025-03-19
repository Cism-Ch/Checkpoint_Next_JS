import { Container } from '@mantine/core';
import Contact from '../src/components/home/Contact/Contact';
import SEO from '../src/components/seo/SEO';

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