# Changelog

Toutes les modifications et améliorations notables apportées à ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/), et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

---

## [Unreleased]

### 🛠️ Tooling & Linting
- **ESLint & Next.js** : Installation et intégration du plugin `@next/eslint-plugin-next` dans la configuration ESLint Flat Config (`eslint.config.mjs`) avec l'activation des règles recommandées et `core-web-vitals`.
- **Résolution des verrous de cache** : Nettoyage des répertoires de build `.next` et `node_modules/.cache` pour éliminer les erreurs de modules manquants (`vendor-chunks`) lors des mises à jour des dépendances.

### 🎨 Design System & Skills
- **UI/UX Pro Max** : Installation du skill `ui-ux-pro-max` (v2.11) dans `.agents/skills/ui-ux-pro-max`.
- **Glassmorphism 2.0 & Tokens** : Implémentation du système Glassmorphism 2.0 (saturation 180%, reflet de bordure, ombres dynamiques) dans `glassmorphism.ts` et `global.css`.
- **Basculement Dynamique de Thème (Fix Navbar)** : Correction de la fonction `createGlassmorphismStyles` avec la fonction CSS `light-dark()` pour s'assurer que l'arrière-plan de la navbar centrale et la couleur des bordures s'adaptent instantanément lors du passage au mode clair.
- **Typographie** : Intégration des polices Google Fonts `Inter` et `JetBrains Mono` pour les titres et le code.
- **Composant Hero & A11y** : Refonte visuelle et réorganisation responsive du composant `Hero`, ajout du contour de focus `:focus-visible` et support de `prefers-reduced-motion`.

---

## [1.1.0] - 2026-07-21

### 🛠️ Corrections & Sécurité (Bug Fixes & Security)
- **Sécurité Next.js** : Mise à jour de `next` de `15.5.9` vers `15.5.21` pour corriger les vulnérabilités de cache poisoning (GHSA-3g8h-86w9-wvmq, GHSA-vfv6-92ff-j949).
- **TypeScript** : 
  - Migration de `target: "es5"` vers `target: "es2022"` dans `tsconfig.json`.
  - Migration de `moduleResolution: "node"` vers `moduleResolution: "bundler"`.
  - Ajout des déclarations de types pour la suite de tests (`jest`, `@testing-library/jest-dom`, `@types/jest-axe`).
  - Correction des typages dans `useTheme.test.ts`, `Hero.styles.test.tsx` et `Header.test.tsx` (0 erreur `tsc --noEmit`).
- **Linting & Stylelint** :
  - Correction de la commande `stylelint` dans `package.json` avec l'option `--allow-empty-input`.
- **Dépendances** :
  - Installation propre des paquets manquants via `pnpm install`.
  - Ajout des dépendances de dev de test (`@testing-library/react`, `jest`, `jest-environment-jsdom`).

### 📁 Organisation & Documentation
- Création du répertoire `docs/`.
- Déplacement des documents d'architecture et tickets techniques vers `docs/` (`TICKET_FULLSTACK.md`, `TICKET_FULLSTACK_V2.md`, `plan-contactRedesign.prompt.md`).
- Création du fichier `CHANGELOG.md`.
- Suppression du fichier inutile `package-lock.json` au profit de `pnpm-lock.yaml`.

### ✅ Tests & Build
- Validation complète des scripts `pnpm run typecheck`, `pnpm run lint` et `pnpm run build`.

---

## [1.0.0] - 2026-07-21

### 🔄 Refactoring & Restructuration (Root Migration)
- **Migration Racine** : Déplacement de l'ensemble du projet Next.js du sous-dossier `next-pages-portfolio` vers la racine du dépôt pour simplifier l'architecture et les builds.
- Nettoyage des scripts et fichiers obsolètes (`repos.js` et dossier `data/`).

---

## [0.2.0] - 2025-12-17

### 🚀 Fonctionnalités (Features)
- Ajout d'un script d'automatisation pour récupérer les dépôts GitHub et générer un fichier JSON source de données.

---

## [0.1.2] - 2025-04-01

### 📝 Documentation & Typos
- Mise à jour et amélioration des commentaires de code multi-fichiers.

---

## [0.1.1] - 2025-03-23 / 2025-03-24

### ✨ Améliorations Design & Composants (UI/UX Upgrades)
- **Mantine & Theme** : Implémentation du système de thème Glassmorphism (`Glassmorphism.ts`, styles personnalisés).
- **Composants UI** :
  - Restructuration du composant `Header` et de la `Navigation` responsive.
  - Refonte des composants `Brand` et `ProfileAvatar`.
  - Amélioration de la section `AboutHero` et du composant `Services`.
  - Ajustement des styles du `Hero` et des `Skills`.
- **Pages** : Ajout des pages de gestion d'erreur `404` et `500` personnalisées.

---

## [0.1.0] - 2025-03-19

### 🎉 Initial Release (First Commit)
- **Architecture de base** : Création du projet Next.js avec Mantine UI v7, Storybook, Jest et Stylelint.
- **Pages principales** :
  - Page d'accueil (`index.tsx`) avec Hero, FeaturedProjects, Skills, Timeline, Contact.
  - Page À propos (`about.tsx`).
  - Page Projets (`projects/index.tsx` & `projects/[slug].tsx`).
  - Page Contact (`contact.tsx`).
- **Accessibilité & SEO** : Intégration de composants A11y (`Announcer`, `SkipToContent`) et gestion SEO globale.
- **CI/CD** : Configuration du workflow GitHub Actions (`npm_test.yml`).
