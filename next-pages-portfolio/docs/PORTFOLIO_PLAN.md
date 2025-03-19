# Plan de Construction du Portfolio

## 1. Structure des Composants

### Components de Base (./components/common)
- `Layout.tsx` - Layout principal avec header et footer
- `Header.tsx` - Navigation et branding
- `Footer.tsx` - Liens sociaux et copyright
- `ThemeToggle.tsx` - Switch pour le thème clair/sombre
- `SEO.tsx` - Gestion des métadonnées

### Components de la Page d'Accueil (./components/home)
- `Hero.tsx` - Section d'introduction
- `Skills.tsx` - Grille de compétences
- `FeaturedProjects.tsx` - Projets mis en avant
- `Timeline.tsx` - Parcours professionnel
- `Contact.tsx` - Formulaire de contact

### Components Projets (./components/projects)
- `ProjectCard.tsx` - Carte de présentation d'un projet
- `ProjectGrid.tsx` - Grille de projets
- `ProjectDetails.tsx` - Vue détaillée d'un projet
- `TechStack.tsx` - Liste des technologies utilisées

### Components UI Réutilisables (./components/ui)
- `Button.tsx` - Boutons personnalisés
- `Card.tsx` - Conteneur de carte
- `Section.tsx` - Conteneur de section
- `Typography.tsx` - Composants textuels
- `Icons.tsx` - Collection d'icônes

## 2. Structure des Pages

### Pages Principales
- `pages/index.tsx` - Page d'accueil
- `pages/about.tsx` - À propos
- `pages/projects/index.tsx` - Liste des projets
- `pages/projects/[slug].tsx` - Détail d'un projet
- `pages/contact.tsx` - Page de contact
- `pages/blog/index.tsx` - Blog (optionnel)
- `pages/blog/[slug].tsx` - Article de blog

## 2.1 Gestion des Routes et Navigation

### Structure des Routes
```typescript
// types/routes.ts
export enum Routes {
  HOME = '/',
  ABOUT = '/about',
  PROJECTS = '/projects',
  PROJECT_DETAIL = '/projects/[slug]',
  CONTACT = '/contact',
  BLOG = '/blog',
  BLOG_POST = '/blog/[slug]'
}

export const dynamicRoute = {
  project: (slug: string) => `/projects/${slug}`,
  blogPost: (slug: string) => `/blog/${slug}`
};
```

### Navigation et Middleware
- Implémentation de la protection des routes (si nécessaire)
- Gestion des redirections
- Gestion des erreurs 404
- Gestion des transitions de pages

### Composants de Navigation
```typescript
// components/common/Navigation/types.ts
interface NavItem {
  label: string;
  path: Routes;
  icon?: IconType;
  children?: NavItem[];
}

// Exemple de configuration de navigation
const navigationConfig: NavItem[] = [
  { label: 'Accueil', path: Routes.HOME },
  { label: 'À propos', path: Routes.ABOUT },
  { 
    label: 'Projets', 
    path: Routes.PROJECTS,
    children: [] // Rempli dynamiquement avec les projets
  },
  { label: 'Contact', path: Routes.CONTACT }
];
```

### Hooks de Navigation
```typescript
// hooks/useNavigation.ts
export const useNavigation = () => {
  const router = useRouter();
  
  const navigateTo = useCallback((route: Routes | string) => {
    router.push(route);
  }, [router]);

  const navigateWithTransition = useCallback(
    async (route: Routes | string) => {
      // Logique de transition avec Framer Motion
    },
    [router]
  );

  return { navigateTo, navigateWithTransition };
};
```

### Gestion du SEO par Route
```typescript
// config/seo.ts
interface SEOConfig {
  title: string;
  description: string;
  image?: string;
}

const routeSEOConfig: Record<Routes, SEOConfig> = {
  [Routes.HOME]: {
    title: 'Portfolio - Accueil',
    description: 'Bienvenue sur mon portfolio...'
  },
  [Routes.ABOUT]: {
    title: 'À propos de moi',
    description: 'Découvrez mon parcours...'
  }
  // ... autres routes
};
```

### Middleware de Route (pages/_middleware.ts)
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Logique de middleware (analytics, auth, etc.)
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Routes à intercepter
    '/((?!api|_next/static|favicon.ico).*)'
  ]
};
```

## 3. Configuration du Thème (./theme)

### Theme Principal (theme.ts)
```typescript
export const theme = createTheme({
  colors: {
    primary: [...],
    secondary: [...],
    accent: [...]
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    headings: { ... }
  },
  spacing: { ... },
  breakpoints: { ... }
});
```

## 4. Données et Types (./types)

### Interfaces
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
  level: number;
}
```

## 5. Utilitaires (./utils)

### Helpers
- `formatDate.ts` - Formatage des dates
- `seoUtils.ts` - Gestion du SEO
- `imageUtils.ts` - Gestion des images
- `analytics.ts` - Tracking et analytics

## 6. Assets (./public)

### Structure des Assets
```
public/
├── images/
│   ├── projects/
│   ├── blog/
│   └── profile/
├── fonts/
└── icons/
```

## 7. Styles (./styles)

### Organisation des Styles
```
styles/
├── global.css
├── animations.css
└── variables.css
```

## 8. Tests (./tests)

### Structure des Tests
```
tests/
├── components/
├── pages/
└── utils/
```

## 9. Plan d'Implémentation

### Phase 1 : Configuration de Base
1. Setup du thème Mantine
2. Implémentation du layout de base
3. Configuration des routes

### Phase 2 : Composants Core
1. Développement des composants UI réutilisables
2. Implémentation du système de navigation
3. Setup du thème clair/sombre

### Phase 3 : Pages Principales
1. Page d'accueil avec Hero
2. Section projets
3. Page À propos
4. Formulaire de contact

### Phase 4 : Fonctionnalités Avancées
1. Animations avec Framer Motion
2. Optimisation des images
3. SEO et métadonnées
4. Analytics

### Phase 5 : Tests et Optimisation
1. Tests unitaires
2. Tests d'intégration
3. Optimisation des performances
4. Déploiement

## 10. Bonnes Pratiques

### Standards de Code
- Utilisation de TypeScript strict
- Documentation des composants avec Storybook
- Tests unitaires pour les composants critiques
- Optimisation des images et assets
- Accessibilité (WCAG 2.1)

### Performance
- Lazy loading des images
- Code splitting
- Optimisation des bundles
- Mise en cache appropriée

### SEO
- Meta tags dynamiques
- Sitemap XML
- Schema.org markup
- Open Graph tags 