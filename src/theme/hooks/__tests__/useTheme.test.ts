import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../useTheme';
import { useThemeStore } from '../../store/themeStore';

// Mock du store Zustand
jest.mock('../../store/themeStore', () => ({
  useThemeStore: jest.fn(),
}));

describe('useTheme', () => {
  beforeEach(() => {
    // Réinitialiser le mock avant chaque test
    jest.clearAllMocks();
  });

  it('should return default values', () => {
    (useThemeStore as unknown as jest.Mock).mockReturnValue({
      colorScheme: 'light',
      isAuto: false,
      toggleColorScheme: jest.fn(),
      setColorScheme: jest.fn(),
      setAuto: jest.fn(),
    });

    const { result } = renderHook(() => useTheme());

    expect(result.current.colorScheme).toBe('light');
    expect(result.current.isDark).toBe(false);
    expect(result.current.isAuto).toBe(false);
  });

  it('should toggle color scheme', () => {
    const mockToggleColorScheme = jest.fn();
    (useThemeStore as unknown as jest.Mock).mockReturnValue({
      colorScheme: 'light',
      isAuto: false,
      toggleColorScheme: mockToggleColorScheme,
      setColorScheme: jest.fn(),
      setAuto: jest.fn(),
    });

    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleColorScheme();
    });

    expect(mockToggleColorScheme).toHaveBeenCalled();
  });

  it('should set color scheme', () => {
    const mockSetColorScheme = jest.fn();
    (useThemeStore as unknown as jest.Mock).mockReturnValue({
      colorScheme: 'light',
      isAuto: false,
      toggleColorScheme: jest.fn(),
      setColorScheme: mockSetColorScheme,
      setAuto: jest.fn(),
    });

    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setColorScheme('dark');
    });

    expect(mockSetColorScheme).toHaveBeenCalledWith('dark');
  });

  it('should set auto mode', () => {
    const mockSetAuto = jest.fn();
    (useThemeStore as unknown as jest.Mock).mockReturnValue({
      colorScheme: 'light',
      isAuto: false,
      toggleColorScheme: jest.fn(),
      setColorScheme: jest.fn(),
      setAuto: mockSetAuto,
    });

    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setAuto(true);
    });

    expect(mockSetAuto).toHaveBeenCalledWith(true);
  });
}); 