import { AppProps } from 'next/app';
import Head from 'next/head';

import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/globalStyles';
import Theme from 'styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Stone Code Challenge</title>
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
