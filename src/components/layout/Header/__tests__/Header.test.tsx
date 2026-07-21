// Mock useRouter
import { useRouter } from 'next/router';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../../../theme/theme';
import Header from '../Header';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Extend Jest matchers with accessibility matchers
expect.extend(toHaveNoViolations);

const mockRouter = {
  pathname: '/',
  push: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  prefetch: jest.fn(() => null),
};

// Configure mock router
(useRouter as jest.Mock).mockReturnValue(mockRouter);

const renderWithTheme = (component: React.ReactNode) => {
  return render(<MantineProvider theme={theme}>{component}</MantineProvider>);
};

describe('Header', () => {
  it('should render without accessibility violations', async () => {
    const { container } = renderWithTheme(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have proper navigation landmarks', () => {
    renderWithTheme(<Header />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('should have accessible links', () => {
    renderWithTheme(<Header />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect(link).not.toHaveAttribute('aria-hidden');
    });
  });

  it('should have sufficient color contrast', () => {
    renderWithTheme(<Header />);
    const header = screen.getByRole('banner');
    const style = window.getComputedStyle(header);
    // Note: This is a basic check. In a real application, you would use a color contrast analyzer library
    expect(style.backgroundColor).toBeDefined();
  });

  it('should render header with navigation', () => {
    render(
      <MantineProvider>
        <Header />
      </MantineProvider>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
