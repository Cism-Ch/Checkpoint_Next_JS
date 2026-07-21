import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';

export default tseslint.config(
  ...mantine,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', '.next/**', '.storybook/**', 'next-pages-portfolio/**'] }
);
