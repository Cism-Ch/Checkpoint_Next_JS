import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { Hero } from '../Hero';
import classes from '../Hero.module.css';

describe('Hero styles', () => {
  it('should apply correct styles', () => {
    const { container } = render(
      <MantineProvider>
        <Hero />
      </MantineProvider>
    );

    const title = container.querySelector('h1');
    expect(title).toHaveStyle({
      fontSize: 'var(--mantine-font-size-3xl)',
      fontWeight: '900',
    });
  });

  it('should have correct container styles', () => {
    const { container } = render(
      <MantineProvider>
        <Hero />
      </MantineProvider>
    );

    // Vérifier les classes Mantine et personnalisées
    expect(container).toHaveClass('mantine-Container-root');
    expect(container).toHaveClass(classes.container);
  });

  it('should have correct text styles', () => {
    const { container } = render(
      <MantineProvider>
        <Hero />
      </MantineProvider>
    );
    const text = container.querySelector('p');

    // Vérifier les styles de texte Mantine
    expect(text).toHaveClass('mantine-Text-root');
    expect(text).toHaveClass(classes.text);
  });

  it('should have correct button styles', () => {
    const { container } = render(
      <MantineProvider>
        <Hero />
      </MantineProvider>
    );
    const buttons = container.querySelectorAll('button');

    // Vérifier que nous avons deux boutons
    expect(buttons).toHaveLength(2);

    // Vérifier les styles de bouton Mantine pour chaque bouton
    buttons.forEach((button) => {
      expect(button).toHaveClass('mantine-Button-root');
      expect(button).toHaveClass(classes.button);
    });
  });

  it('should have correct image styles', () => {
    const { container } = render(
      <MantineProvider>
        <Hero />
      </MantineProvider>
    );
    const image = container.querySelector('img');

    // Vérifier les styles d'image
    expect(image).toHaveClass(classes.image);
  });

  it('should have correct responsive styles', () => {
    const { container } = render(
      <MantineProvider>
        <Hero />
      </MantineProvider>
    );

    // Vérifier que les styles responsifs sont appliqués
    expect(container).toHaveStyle({
      padding: expect.stringContaining('var(--mantine-spacing-'),
    });
  });

  it('should use Mantine CSS variables for spacing', () => {
    const { container } = render(
      <MantineProvider>
        <Hero />
      </MantineProvider>
    );
    const styles = window.getComputedStyle(container);

    // Vérifier que les variables CSS de Mantine sont utilisées
    expect(styles.getPropertyValue('--mantine-spacing-xl')).toBeDefined();
    expect(styles.getPropertyValue('--mantine-spacing-lg')).toBeDefined();
  });
});
