import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { ThemeToggle } from '../ThemeToggle';
import classes from '../ThemeToggle.module.css';

describe('ThemeToggle styles', () => {
  it('should apply correct styles', () => {
    const { container } = render(
      <MantineProvider>
        <ThemeToggle />
      </MantineProvider>
    );

    const button = container.querySelector('button');
    expect(button).toHaveClass(classes.toggle);
    expect(button).toHaveStyle({
      transition: 'var(--mantine-transition-default)',
      borderRadius: 'var(--mantine-radius-md)',
    });
  });
});
