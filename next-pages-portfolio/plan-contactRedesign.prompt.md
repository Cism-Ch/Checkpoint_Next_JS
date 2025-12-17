# Plan: Contact Component Redesign

## User Request
"Propose moi un autres style plus coherent avec mon app concernent le composants contact"

## Objective
Update the Contact component design to match the application's visual identity (clean, Mantine-based, consistent animations), replacing the previous "neon/cyberpunk" style.

## Current State
- **Previous Style**: Dark background image, scanlines, neon text, custom CSS layout.
- **App Style**: Minimalist, `Dots` background pattern, `ScrollAnimation` (framer-motion wrapper), Mantine `SimpleGrid`/`Stack`.

## Proposed Changes

### 1. Component Structure (`Contact.tsx`)
- [x] Replace custom CSS classes with Mantine components (`Container`, `SimpleGrid`, `Stack`, `Group`, `ThemeIcon`).
- [x] Integrate `Dots` component for background consistency.
- [x] Keep functional logic (form handling, notifications).

### 2. Styling (`Contact.module.css`)
- [x] Remove `scanlines`, `overlay`, and background image.
- [x] Define a clean `wrapper` with standard spacing.
- [x] Style `form` container to blend with the theme (light/dark mode support).

### 3. Verification
- [x] Fix type errors in `pages/projects/[slug].tsx` (Project interface mismatch).
- [x] Fix type errors in `Layout.tsx` (Animation types).
- [x] Verify `npm run build` success.

## Next Steps / Refinement
- [x] Review the new design in the browser. (Simulated via code review)
- [x] Adjust spacing or animations if necessary. (Refined CSS for consistency)
- [x] Ensure accessibility (contrast, labels) is maintained. (Added aria-labels and consistent color handling)
