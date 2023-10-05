import React, { useContext, useEffect, useMemo, useState } from 'react';

import ConversionContext, {
  ConversionContextProps
} from 'contexts/ConversionContext';

import axios from 'lib/http-client';

import { PurchaseType } from 'utils/enums';

/**
 * A React component that serves as the provider for the currency
 * conversion context. It manages and provides access to conversion-related
 * data and functions for its child components.
 */
export default function ConversionProvider({
  children
}: React.PropsWithChildren): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [dollarRate, setDollarRate] = useState<number>(0);
  const [resultAmount, setResultAmount] = useState<number>(0);

  const [dollarAmount, setDollarAmount] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(0);
  const [purchaseType, setPurchaseType] = useState<PurchaseType>(0);

  // Fetch the dollar exchange rate from an external API and update the state
  useEffect(() => {
    const fetchData = async () => {
      axios.get('/USD-BRL').then((response) => {
        const data = response.data['USDBRL'];
        setDollarRate(Number(data.bid));
      });
    };

    fetchData();
  }, []);

  const contextValue = useMemo<ConversionContextProps>(
    () => ({
      currentPage,
      dollarRate: dollarRate,
      resultAmount,
      purchaseType,
      taxRate,
      dollarAmount,
      setCurrentPage,
      setResultAmount,
      setPurchaseType,
      setTaxRate,
      setDollarAmount
    }),
    [currentPage, dollarRate, resultAmount, purchaseType, taxRate, dollarAmount]
  );

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
}

export function useCurrency() {
  return useContext(ConversionContext)!;
}
