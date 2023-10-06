import { useContext } from 'react';

import ConversionContext from 'contexts/ConversionContext';

import ConversionForm from './ConversionForm';
import Result from './Result';

export default function Conversion() {
  const { currentPage: currentPage } = useContext(ConversionContext)!;

  switch (currentPage) {
    case 0:
      return <ConversionForm />;
    case 1:
      return <Result />;
  }
}
