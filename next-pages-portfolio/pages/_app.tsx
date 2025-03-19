import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '../src/styles/global.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../src/theme/theme';
import Layout from '../src/components/layout/MainLayout/Layout';
import SEO from '../src/components/seo/SEO';

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
