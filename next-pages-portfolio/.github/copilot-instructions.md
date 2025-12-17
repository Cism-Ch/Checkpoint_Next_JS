# Copilot Instructions

## Project Overview
- **Framework**: Next.js (Pages Router) + TypeScript
- **UI Library**: Mantine v7
- **Styling**: CSS Modules (`*.module.css`) + PostCSS + Mantine Theme
- **State Management**: Zustand
- **Testing**: Jest + React Testing Library + Storybook

## Architecture & Organization
- **Routes**: `pages/` directory (Pages Router).
- **Components**: `src/components/` organized by feature (e.g., `home`, `projects`, `layout`) or common utility (`common`).
- **Theme**: `src/theme/theme.ts` defines the custom Mantine theme (colors, fonts, etc.).
- **Data**: Static data resides in `src/data/` (e.g., `projects.ts`).
- **Layout**: `src/components/layout/MainLayout/Layout.tsx` handles the main structure, including `Header`, `Footer`, and Framer Motion page transitions.

## Coding Conventions

### Styling
- **Mantine**: Prefer Mantine components for UI primitives.
- **CSS Modules**: Use CSS Modules for component-specific styles. Import as `classes` (e.g., `import classes from './Component.module.css'`).
- **Units**: Use `rem` from `@mantine/core` for spacing and sizing.
- **Theme Access**: Use `theme` object or `useMantineTheme` hook to access theme variables.
- **Glassmorphism**: Use `createGlassmorphismStyles` from `src/theme/styles/glassmorphism.ts`.

### Images
- **Placeholders**: Use `placehold.co` for placeholder images during development.
  - Example: `https://placehold.co/600x400`
- **Optimization**: Use `OptimizedImage` component (`src/components/common/OptimizedImage`) instead of standard `img` or `next/image` directly when possible.

### Testing
- **Render**: ALWAYS use the custom `render` function from `test-utils/render.tsx` for component tests. It wraps components in the `MantineProvider`.
  ```tsx
  import { render } from '@/test-utils/render';
  // ...
  render(<MyComponent />);
  ```
- **Commands**:
  - `npm run test`: Runs Prettier, Lint, Typecheck, and Jest.
  - `npm run jest`: Runs only Jest tests.

### Language
- **Comments**: Existing code comments are often in **French**. Maintain this consistency if modifying existing files with French comments.
- **Content**: Static content in `src/data/` is in French.

## Key Files
- `src/theme/theme.ts`: Central theme configuration.
- `src/components/layout/MainLayout/Layout.tsx`: Main application wrapper.
- `test-utils/render.tsx`: Custom test renderer.
- `src/data/projects.ts`: Project data structure example.
