import Document, { Head, Html, Main, NextScript } from 'next/document';
import { JSX } from 'react';

export default class GlobalDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
