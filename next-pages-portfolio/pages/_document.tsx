/**
 * Custom Document component for Next.js
 * This file is used to customize the HTML document structure.
 * It's rendered on the server side and used for initial page loads.
 */
import { Head, Html, Main, NextScript } from 'next/document';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

/**
 * Document component that customizes the app's HTML structure
 * Configures:
 * - HTML language attribute
 * - Mantine color scheme script for theme handling
 * - Google Fonts (Raleway) integration
 * - Basic document structure with Main content and Next.js scripts
 */
export default function Document() {
  return (
    <Html lang="en" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
