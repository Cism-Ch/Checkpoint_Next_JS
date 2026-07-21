import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../ThemeToggle';
import { useTheme } from '../../../../theme/hooks/useTheme';

// Mock du hook useTheme
jest.mock('../../../../theme/hooks/useTheme', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render light mode icon when in dark mode', () => {
    (useTheme as jest.Mock).mockReturnValue({
      isDark: true,
      toggleColorScheme: jest.fn(),
    });

    render(<ThemeToggle />);
    expect(screen.getByTestId('icon-sun')).toBeInTheDocument();
  });

  it('should render dark mode icon when in light mode', () => {
    (useTheme as jest.Mock).mockReturnValue({
      isDark: false,
      toggleColorScheme: jest.fn(),
    });

    render(<ThemeToggle />);
    expect(screen.getByTestId('icon-moon')).toBeInTheDocument();
  });

  it('should call toggleColorScheme when clicked', () => {
    const mockToggleColorScheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      isDark: false,
      toggleColorScheme: mockToggleColorScheme,
    });

    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole('button'));

    expect(mockToggleColorScheme).toHaveBeenCalled();
  });

  it('should have correct accessibility attributes', () => {
    (useTheme as jest.Mock).mockReturnValue({
      isDark: false,
      toggleColorScheme: jest.fn(),
    });

    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'Basculer le thème');
  });
}); 