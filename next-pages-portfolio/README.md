# Professional Portfolio

A modern, responsive portfolio website built with Next.js and Mantine UI, showcasing professional projects and skills with a focus on performance and accessibility.

## 🚀 Features

### Core Technologies
- **Next.js 15** with Pages Router for optimal performance
- **Mantine UI** comprehensive component library
- **TypeScript** for type-safe development
- **React 19** with modern hooks and patterns

### UI/UX Features
- **Dark/Light Theme** with system preference detection
- **Responsive Design** optimized for all devices
- **Smooth Animations** using Framer Motion
- **Glassmorphism Effects** for modern aesthetics
- **Accessibility** compliant components (A11y)

### Development Tools
- **Storybook** for component development and documentation
- **ESLint & Stylelint** for code quality
- **TypeScript** strict mode for error prevention
- **Bundle Analysis** for performance optimization
- **Component Testing** setup with Jest and React Testing Library

### Performance Features
- **Code Splitting** automatic optimization
- **Image Optimization** with Next.js Image component
- **Static Site Generation** support
- **Bundle Analysis** with @next/bundle-analyzer

## 🛠️ Available Scripts

### Development
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm export       # Export static site to 'out' folder
pnpm analyze      # Analyze bundle size
```

### Code Quality
```bash
pnpm test         # Run all checks (prettier, lint, typecheck)
pnpm lint         # Run ESLint and Stylelint
pnpm typecheck    # TypeScript type checking
```

### Documentation
```bash
pnpm storybook    # Start Storybook development server
pnpm storybook:build # Build Storybook for production
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── about/          # About page components
│   ├── common/         # Shared utilities (Theme, Brand, etc.)
│   ├── home/           # Homepage specific components
│   ├── layout/         # Header, Footer, Navigation
│   └── projects/       # Project showcase components
├── data/               # Static data (projects, etc.)
├── styles/             # Global styles
├── theme/              # Theme configuration and hooks
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎨 Key Components

### Theme System
- Custom theme provider with Zustand state management
- Dark/light mode with system preference detection
- Glassmorphism effects and modern styling

### Project Showcase
- Dynamic project filtering and sorting
- Project cards with animations
- Detailed project pages with rich content

### Performance Optimizations
- Lazy loading for images and components
- Code splitting by route and component
- Optimized bundle sizes

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Run development server**
   ```bash
   pnpm dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (Pages Router) |
| UI Library | Mantine UI v7 |
| Language | TypeScript |
| State Management | Zustand |
| Styling | CSS Modules + Mantine |
| Animations | Framer Motion |
| Charts | Recharts + Mantine Charts |
| Testing | Jest + React Testing Library |
| Documentation | Storybook |
| Package Manager | pnpm |

## 🤝 Contributing

This portfolio follows strict code quality standards:
- All code must pass TypeScript checks
- ESLint and Stylelint rules enforced
- Components should be documented in Storybook
- Accessibility compliance is required

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
