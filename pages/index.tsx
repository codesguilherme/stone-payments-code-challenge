import React from 'react';

import Header from 'components/Header';
import PageContainer from 'components/PageContainer';
import Conversion from 'components/Conversion';

import ConversionProvider from 'providers/ConversionProvider';

export default function MainPage(): JSX.Element | null {
  return (
    <PageContainer>
      <Header />
      <ConversionProvider>
        <Conversion />
      </ConversionProvider>
    </PageContainer>
  );
}
