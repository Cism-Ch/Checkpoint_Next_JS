/**
 * Style imports for the application
 * - Mantine core styles for base components
 * - Mantine carousel styles for carousel functionality
 * - Global styles for custom application-wide styling
 */
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '../src/styles/global.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../src/theme/theme';
import Layout from '../src/components/layout/MainLayout/Layout';
import SEO from '../src/components/seo/SEO';

/**
 * Main application component that wraps all pages
 * Configures:
 * - Mantine UI framework with theme and color scheme
 * - Global layout structure
 * - Meta tags and SEO settings
 *
 * @param {AppProps} props - Next.js app properties containing the current page component and its props
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <ColorSchemeScript />
      </Head>
      <SEO />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
